import { prisma } from './prisma_lW-FDGGq.mjs';

const roleToDtoKey = {
  REFEREE_1: "referee1Id",
  REFEREE_2: "referee2Id",
  TABLE_PENALTY: "tablePenaltyId",
  TABLE_CLOCK: "tableClockId"
};
function pickRefereeIdForRole(input, role) {
  const key = roleToDtoKey[role];
  const v = input[key];
  const trimmed = typeof v === "string" ? v.trim() : void 0;
  return trimmed && trimmed.length > 0 ? trimmed : void 0;
}
async function validateTournamentAndRoles(tournamentId, refereeIds, ownerUserId) {
  if (refereeIds.length === 0) return;
  const tournament = await prisma.tournament.findFirst({
    where: { id: tournamentId, season: { ownerUserId } },
    select: { id: true }
  });
  if (!tournament) throw new Error("TOURNAMENT_NOT_FOUND");
  const refs = await prisma.referee.findMany({
    where: { id: { in: refereeIds } },
    select: { id: true }
  });
  if (refs.length !== refereeIds.length) throw new Error("REFEREE_NOT_FOUND");
  const tournamentRefs = await prisma.tournamentReferee.findMany({
    where: { tournamentId, refereeId: { in: refereeIds } },
    select: { refereeId: true }
  });
  const allowed = new Set(tournamentRefs.map((r) => r.refereeId));
  const missing = refereeIds.find((id) => !allowed.has(id));
  if (missing) throw new Error("REFEREE_NOT_IN_TOURNAMENT");
}
function dedupeAndValidateRefereesPerMatch(input) {
  const ids = [input.referee1Id, input.referee2Id, input.tablePenaltyId, input.tableClockId].map((v) => typeof v === "string" ? v.trim() : "").filter((v) => v.length > 0);
  const uniqueCount = new Set(ids).size;
  if (uniqueCount !== ids.length) throw new Error("DUPLICATE_REFEREE_IN_MATCH");
  return ids;
}
function refereeAssignmentsMatchInput(stored, input) {
  for (const role of Object.keys(roleToDtoKey)) {
    const incoming = pickRefereeIdForRole(input, role) ?? "";
    const existing = stored[role] ?? "";
    if (incoming !== existing) return false;
  }
  return true;
}
async function listRefereePlanForTournament(tournamentId, ownerUserId) {
  const tournament = await prisma.tournament.findFirst({
    where: { id: tournamentId, season: { ownerUserId } },
    select: { id: true }
  });
  if (!tournament) throw new Error("TOURNAMENT_NOT_FOUND");
  const matches = await prisma.match.findMany({
    where: { tournamentId },
    orderBy: { scheduledAt: "asc" },
    select: {
      id: true,
      scheduledAt: true,
      court: true,
      teamAId: true,
      teamBId: true,
      refereeAssignments: {
        select: {
          role: true,
          refereeId: true
        }
      }
    }
  });
  return matches.map((m) => {
    const refereeAssignments = {};
    for (const a of m.refereeAssignments) {
      refereeAssignments[a.role] = a.refereeId;
    }
    return {
      matchId: m.id,
      scheduledAt: m.scheduledAt.toISOString(),
      court: m.court ?? void 0,
      teamAId: m.teamAId,
      teamBId: m.teamBId,
      refereeAssignments
    };
  });
}
async function createRefereePlanMatchForTournament(tournamentId, input, ownerUserId) {
  const [teamAId, teamBId] = [input.teamAId, input.teamBId];
  if (!teamAId || !teamBId) throw new Error("TEAM_NOT_IN_TOURNAMENT");
  if (teamAId === teamBId) throw new Error("TEAMS_MUST_BE_DIFFERENT");
  const tournament = await prisma.tournament.findFirst({
    where: { id: tournamentId, season: { ownerUserId } },
    select: { id: true }
  });
  if (!tournament) throw new Error("TOURNAMENT_NOT_FOUND");
  const teams = await prisma.tournamentTeam.findMany({
    where: { tournamentId, teamId: { in: [teamAId, teamBId] } },
    select: { teamId: true }
  });
  if (teams.length !== 2) throw new Error("TEAM_NOT_IN_TOURNAMENT");
  const refereeIds = dedupeAndValidateRefereesPerMatch(input);
  await validateTournamentAndRoles(tournamentId, refereeIds, ownerUserId);
  const matchId = await prisma.$transaction(async (tx) => {
    const match = await tx.match.create({
      data: {
        tournamentId,
        scheduledAt: new Date(input.scheduledAt),
        court: input.court?.trim() ? input.court.trim() : null,
        jerseyInfo: null,
        scoreA: null,
        scoreB: null,
        teamAId,
        teamBId
      },
      select: { id: true }
    });
    const assignments = [];
    Object.keys(roleToDtoKey).forEach((role) => {
      const refereeId = pickRefereeIdForRole(input, role);
      if (!refereeId) return;
      assignments.push({ matchId: match.id, role, refereeId });
    });
    if (assignments.length > 0) {
      await tx.refereeAssignment.createMany({ data: assignments });
    }
    return match.id;
  });
  return matchId;
}
async function updateRefereePlanMatchForTournament(tournamentId, matchId, input, ownerUserId) {
  const owned = await prisma.tournament.findFirst({
    where: { id: tournamentId, season: { ownerUserId } },
    select: { id: true }
  });
  if (!owned) throw new Error("TOURNAMENT_NOT_FOUND");
  const match = await prisma.match.findUnique({
    where: { id: matchId },
    select: {
      id: true,
      tournamentId: true,
      scoreA: true,
      scoreB: true,
      refereeAssignments: { select: { role: true, refereeId: true } }
    }
  });
  if (!match || match.tournamentId !== tournamentId) throw new Error("MATCH_NOT_FOUND");
  const storedReferees = {};
  for (const a of match.refereeAssignments) {
    storedReferees[a.role] = a.refereeId;
  }
  const [teamAId, teamBId] = [input.teamAId, input.teamBId];
  if (!teamAId || !teamBId) throw new Error("TEAM_IDS_REQUIRED");
  if (teamAId === teamBId) throw new Error("TEAMS_MUST_BE_DIFFERENT");
  const teams = await prisma.tournamentTeam.findMany({
    where: { tournamentId, teamId: { in: [teamAId, teamBId] } },
    select: { teamId: true }
  });
  if (teams.length !== 2) throw new Error("TEAM_NOT_IN_TOURNAMENT");
  const scoresLocked = match.scoreA != null && match.scoreB != null;
  if (scoresLocked && !refereeAssignmentsMatchInput(storedReferees, input)) {
    throw new Error("REFEREES_LOCKED_MATCH_HAS_RESULT");
  }
  const refereeIds = dedupeAndValidateRefereesPerMatch(input);
  await validateTournamentAndRoles(tournamentId, refereeIds, ownerUserId);
  await prisma.$transaction(async (tx) => {
    await tx.match.update({
      where: { id: matchId },
      data: {
        scheduledAt: new Date(input.scheduledAt),
        court: input.court?.trim() ? input.court.trim() : null,
        teamAId,
        teamBId
      }
    });
    await tx.refereeAssignment.deleteMany({ where: { matchId } });
    const assignments = [];
    Object.keys(roleToDtoKey).forEach((role) => {
      const refereeId = pickRefereeIdForRole(input, role);
      if (!refereeId) return;
      assignments.push({ matchId, role, refereeId });
    });
    if (assignments.length > 0) {
      await tx.refereeAssignment.createMany({ data: assignments });
    }
  });
  return tournamentId;
}

export { createRefereePlanMatchForTournament as c, listRefereePlanForTournament as l, updateRefereePlanMatchForTournament as u };
