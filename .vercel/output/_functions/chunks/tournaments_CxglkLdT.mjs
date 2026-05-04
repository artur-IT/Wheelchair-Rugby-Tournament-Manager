import { prisma } from './prisma_lW-FDGGq.mjs';

function mapMealLocationFromForm(location) {
  return location === "hala" ? "HALL" : "HOTEL";
}
const tournamentListInclude = {
  venues: { orderBy: { id: "asc" } },
  accommodations: { orderBy: { id: "asc" } },
  volunteers: true,
  teams: {
    include: {
      team: {
        include: {
          players: {
            orderBy: [{ lastName: "asc" }, { firstName: "asc" }]
          }
        }
      }
    }
  },
  players: {
    include: { player: true }
  },
  referees: { include: { referee: true } },
  classifiers: { include: { classifier: true } }
};
function mapTournamentListRow(t) {
  const primaryVenue = t.venues[0] ?? null;
  const primaryAccommodation = t.accommodations[0] ?? null;
  const hasTournamentPlayerRoster = t.players.length > 0;
  return {
    id: t.id,
    name: t.name,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate ? t.endDate.toISOString() : void 0,
    seasonId: t.seasonId,
    venue: primaryVenue ? {
      id: primaryVenue.id,
      name: primaryVenue.name,
      address: [primaryVenue.street, `${primaryVenue.postalCode ?? ""} ${primaryVenue.city ?? ""}`.trim()].map((v) => (v ?? "").trim()).filter(Boolean).join(", ") || void 0,
      city: primaryVenue.city ?? void 0,
      street: primaryVenue.street ?? void 0,
      postalCode: primaryVenue.postalCode ?? void 0,
      notes: primaryVenue.notes ?? void 0,
      mapUrl: primaryVenue.mapUrl ?? void 0,
      tournamentId: primaryVenue.tournamentId
    } : void 0,
    accommodation: primaryAccommodation ? {
      id: primaryAccommodation.id,
      name: primaryAccommodation.name,
      address: primaryAccommodation.address ?? void 0,
      notes: primaryAccommodation.notes ?? void 0,
      mapUrl: primaryAccommodation.mapUrl ?? void 0,
      tournamentId: primaryAccommodation.tournamentId
    } : void 0,
    catering: t.catering ?? void 0,
    breakfastServingTime: t.breakfastServingTime ?? void 0,
    breakfastLocation: t.breakfastLocation ?? void 0,
    lunchServingTime: t.lunchServingTime ?? void 0,
    lunchLocation: t.lunchLocation ?? void 0,
    dinnerServingTime: t.dinnerServingTime ?? void 0,
    dinnerLocation: t.dinnerLocation ?? void 0,
    cateringNotes: t.cateringNotes ?? void 0,
    parking: primaryAccommodation?.notes ?? void 0,
    teams: t.teams.map((tt) => {
      const teamPlayers = hasTournamentPlayerRoster ? t.players.filter((tp) => tp.player.teamId === tt.team.id).map((tp) => tp.player).sort((a, b) => {
        const byLastName = a.lastName.localeCompare(b.lastName, "pl");
        if (byLastName !== 0) return byLastName;
        return a.firstName.localeCompare(b.firstName, "pl");
      }) : tt.team.players;
      return {
        id: tt.team.id,
        name: tt.team.name,
        websiteUrl: tt.team.websiteUrl ?? void 0,
        address: tt.team.address ?? void 0,
        city: tt.team.city ?? void 0,
        postalCode: tt.team.postalCode ?? void 0,
        contactFirstName: tt.team.contactFirstName ?? void 0,
        contactLastName: tt.team.contactLastName ?? void 0,
        contactEmail: tt.team.contactEmail ?? void 0,
        contactPhone: tt.team.contactPhone ?? void 0,
        seasonId: tt.team.seasonId,
        coachId: tt.team.coachId ?? void 0,
        refereeId: tt.team.refereeId ?? void 0,
        players: teamPlayers.map((player) => ({
          id: player.id,
          firstName: player.firstName,
          lastName: player.lastName,
          number: player.number ?? void 0,
          classification: player.classification ?? void 0,
          teamId: player.teamId
        }))
      };
    }),
    referees: t.referees.map((tr) => ({
      id: tr.referee.id,
      firstName: tr.referee.firstName,
      lastName: tr.referee.lastName,
      email: tr.referee.email ?? void 0,
      phone: tr.referee.phone
    })),
    classifiers: t.classifiers.map((tc) => ({
      id: tc.classifier.id,
      firstName: tc.classifier.firstName,
      lastName: tc.classifier.lastName,
      email: tc.classifier.email ?? void 0,
      phone: tc.classifier.phone
    })),
    volunteers: t.volunteers.map((v) => ({
      id: v.id,
      firstName: v.firstName,
      lastName: v.lastName,
      phone: v.phone ?? void 0,
      tournamentId: v.tournamentId
    }))
  };
}
async function getOwnedTournamentMeta(tournamentId, ownerUserId) {
  const row = await prisma.tournament.findFirst({
    where: { id: tournamentId, season: { ownerUserId } },
    select: { id: true, seasonId: true }
  });
  if (!row) throw new Error("TOURNAMENT_NOT_FOUND");
  return row;
}
async function createTournamentWithDetails(form, ownerUserId) {
  const latestSeason = await prisma.season.findFirst({
    where: { ownerUserId },
    orderBy: { createdAt: "desc" }
  });
  if (!latestSeason) {
    throw new Error("NO_SEASON_AVAILABLE");
  }
  const hotelAddress = `${form.hotelStreet}, ${form.hotelZipCode} ${form.hotelCity}`;
  return prisma.$transaction(async (tx) => {
    const tournament = await tx.tournament.create({
      data: {
        name: form.name,
        startDate: form.startDate,
        endDate: form.endDate ?? null,
        catering: form.catering,
        breakfastServingTime: form.breakfastServingTime,
        breakfastLocation: mapMealLocationFromForm(form.breakfastLocation),
        lunchServingTime: form.lunchServingTime,
        lunchLocation: mapMealLocationFromForm(form.lunchLocation),
        dinnerServingTime: form.dinnerServingTime,
        dinnerLocation: mapMealLocationFromForm(form.dinnerLocation),
        cateringNotes: form.cateringNotes,
        seasonId: latestSeason.id
      }
    });
    await tx.accommodation.create({
      data: {
        name: form.hotel,
        address: hotelAddress,
        notes: form.parking || null,
        mapUrl: form.mapLink || null,
        tournamentId: tournament.id
      }
    });
    await tx.sportsHall.create({
      data: {
        name: form.hallName,
        city: form.city || null,
        street: form.street || null,
        postalCode: form.zipCode || null,
        notes: null,
        mapUrl: form.hallMapLink || null,
        tournamentId: tournament.id
      }
    });
    return tournament;
  });
}
async function listTournamentsWithDetails(ownerUserId) {
  const tournaments = await prisma.tournament.findMany({
    where: { season: { ownerUserId } },
    orderBy: { startDate: "asc" },
    include: tournamentListInclude
  });
  return tournaments.map(mapTournamentListRow);
}
async function getTournamentWithDetailsForOwner(tournamentId, ownerUserId) {
  const row = await prisma.tournament.findFirst({
    where: { id: tournamentId, season: { ownerUserId } },
    include: tournamentListInclude
  });
  if (!row) return null;
  return mapTournamentListRow(row);
}
async function updateTournamentWithDetails(tournamentId, form, ownerUserId) {
  const hotelAddress = `${form.hotelStreet}, ${form.hotelZipCode} ${form.hotelCity}`;
  return prisma.$transaction(async (tx) => {
    const existing = await tx.tournament.findFirst({
      where: { id: tournamentId, season: { ownerUserId } },
      select: { id: true }
    });
    if (!existing) {
      throw new Error("TOURNAMENT_NOT_FOUND");
    }
    await tx.tournament.update({
      where: { id: tournamentId },
      data: {
        name: form.name,
        startDate: form.startDate,
        endDate: form.endDate ?? null,
        catering: form.catering,
        breakfastServingTime: form.breakfastServingTime,
        breakfastLocation: mapMealLocationFromForm(form.breakfastLocation),
        lunchServingTime: form.lunchServingTime,
        lunchLocation: mapMealLocationFromForm(form.lunchLocation),
        dinnerServingTime: form.dinnerServingTime,
        dinnerLocation: mapMealLocationFromForm(form.dinnerLocation),
        cateringNotes: form.cateringNotes
      }
    });
    await tx.sportsHall.deleteMany({ where: { tournamentId } });
    await tx.accommodation.deleteMany({ where: { tournamentId } });
    await tx.accommodation.create({
      data: {
        name: form.hotel,
        address: hotelAddress,
        notes: form.parking || null,
        mapUrl: form.mapLink || null,
        tournamentId
      }
    });
    await tx.sportsHall.create({
      data: {
        name: form.hallName,
        city: form.city || null,
        street: form.street || null,
        postalCode: form.zipCode || null,
        notes: null,
        mapUrl: form.hallMapLink || null,
        tournamentId
      }
    });
    return tournamentId;
  });
}
async function deleteTournament(tournamentId, ownerUserId) {
  const result = await prisma.tournament.deleteMany({
    where: { id: tournamentId, season: { ownerUserId } }
  });
  if (result.count === 0) {
    throw new Error("TOURNAMENT_NOT_FOUND");
  }
  return tournamentId;
}
async function addTeamsToTournament(tournamentId, teamIds, ownerUserId) {
  const tournament = await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const teams = await prisma.team.findMany({
    where: { id: { in: teamIds } },
    select: { id: true, seasonId: true }
  });
  if (teams.length !== teamIds.length) {
    throw new Error("TEAM_NOT_FOUND");
  }
  const wrongSeason = teams.find((tm) => tm.seasonId !== tournament.seasonId);
  if (wrongSeason) {
    throw new Error("TEAM_WRONG_SEASON");
  }
  await prisma.$transaction(async (tx) => {
    await tx.tournamentTeam.createMany({
      data: teamIds.map((teamId) => ({ tournamentId, teamId })),
      skipDuplicates: true
    });
    const teamPlayers = await tx.player.findMany({
      where: { teamId: { in: teamIds } },
      select: { id: true }
    });
    if (teamPlayers.length > 0) {
      await tx.tournamentPlayer.createMany({
        data: teamPlayers.map((player) => ({ tournamentId, playerId: player.id })),
        skipDuplicates: true
      });
    }
  });
  return tournamentId;
}
async function removeTeamFromTournament(tournamentId, teamId, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  await prisma.$transaction(async (tx) => {
    await tx.tournamentTeam.deleteMany({
      where: { tournamentId, teamId }
    });
    await tx.tournamentPlayer.deleteMany({
      where: {
        tournamentId,
        player: { teamId }
      }
    });
  });
  return tournamentId;
}
async function setTournamentTeamPlayers(tournamentId, teamId, playerIds, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const tournamentTeam = await prisma.tournamentTeam.findUnique({
    where: { tournamentId_teamId: { tournamentId, teamId } },
    select: { teamId: true }
  });
  if (!tournamentTeam) {
    throw new Error("TEAM_NOT_IN_TOURNAMENT");
  }
  const teamPlayers = await prisma.player.findMany({
    where: { teamId },
    select: { id: true }
  });
  const teamPlayerIdSet = new Set(teamPlayers.map((player) => player.id));
  const hasOutsidePlayer = playerIds.some((playerId) => !teamPlayerIdSet.has(playerId));
  if (hasOutsidePlayer) {
    throw new Error("PLAYER_NOT_IN_TEAM");
  }
  await prisma.$transaction(async (tx) => {
    await tx.tournamentPlayer.deleteMany({
      where: {
        tournamentId,
        player: { teamId }
      }
    });
    if (playerIds.length > 0) {
      await tx.tournamentPlayer.createMany({
        data: playerIds.map((playerId) => ({ tournamentId, playerId })),
        skipDuplicates: true
      });
    }
  });
}
async function addRefereesToTournament(tournamentId, refereeIds, ownerUserId) {
  const tournament = await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const referees = await prisma.referee.findMany({
    where: { id: { in: refereeIds } },
    select: { id: true, seasonId: true }
  });
  if (referees.length !== refereeIds.length) throw new Error("REFEREE_NOT_FOUND");
  const wrongSeason = referees.find((r) => r.seasonId !== tournament.seasonId);
  if (wrongSeason) throw new Error("REFEREE_WRONG_SEASON");
  await prisma.tournamentReferee.createMany({
    data: refereeIds.map((refereeId) => ({ tournamentId, refereeId })),
    skipDuplicates: true
  });
  return tournamentId;
}
async function removeRefereeFromTournament(tournamentId, refereeId, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  await prisma.tournamentReferee.deleteMany({
    where: { tournamentId, refereeId }
  });
  return tournamentId;
}
async function addClassifiersToTournament(tournamentId, classifierIds, ownerUserId) {
  const tournament = await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const classifiers = await prisma.classifier.findMany({
    where: { id: { in: classifierIds } },
    select: { id: true, seasonId: true }
  });
  if (classifiers.length !== classifierIds.length) throw new Error("CLASSIFIER_NOT_FOUND");
  const wrongSeason = classifiers.find((c) => c.seasonId !== tournament.seasonId);
  if (wrongSeason) throw new Error("CLASSIFIER_WRONG_SEASON");
  await prisma.tournamentClassifier.createMany({
    data: classifierIds.map((classifierId) => ({ tournamentId, classifierId })),
    skipDuplicates: true
  });
  return tournamentId;
}
async function removeClassifierFromTournament(tournamentId, classifierId, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  await prisma.tournamentClassifier.deleteMany({
    where: { tournamentId, classifierId }
  });
  return tournamentId;
}
const MATCH_DURATION_MS = 90 * 60 * 1e3;
function normalizeCourt(court) {
  const next = (court ?? "").trim();
  return next === "" ? null : next;
}
async function ensureNoCourtTimeConflict(args) {
  const scheduledAtMs = args.scheduledAt.getTime();
  if (Number.isNaN(scheduledAtMs)) throw new Error("INVALID_SCHEDULED_AT");
  const endsAtMs = scheduledAtMs + MATCH_DURATION_MS;
  const existingMatches = await prisma.match.findMany({
    where: {
      tournamentId: args.tournamentId,
      court: args.court,
      id: args.excludeMatchId ? { not: args.excludeMatchId } : void 0
    },
    select: { scheduledAt: true }
  });
  for (const m of existingMatches) {
    const startMs = m.scheduledAt.getTime();
    if (Number.isNaN(startMs)) continue;
    const endMs = startMs + MATCH_DURATION_MS;
    if (scheduledAtMs < endMs && startMs < endsAtMs) {
      throw new Error("COURT_TIME_CONFLICT");
    }
  }
}
async function listMatchesForTournament(tournamentId, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const matches = await prisma.match.findMany({
    where: { tournamentId },
    orderBy: { scheduledAt: "asc" },
    select: {
      id: true,
      scheduledAt: true,
      court: true,
      jerseyInfo: true,
      scoreA: true,
      scoreB: true,
      status: true,
      tournamentId: true,
      teamAId: true,
      teamBId: true
    }
  });
  return matches.map((m) => ({
    id: m.id,
    scheduledAt: m.scheduledAt.toISOString(),
    court: m.court ?? void 0,
    jerseyInfo: m.jerseyInfo ?? void 0,
    scoreA: m.scoreA ?? void 0,
    scoreB: m.scoreB ?? void 0,
    status: m.status,
    tournamentId: m.tournamentId,
    teamAId: m.teamAId,
    teamBId: m.teamBId
  }));
}
async function createMatchForTournament(tournamentId, input, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const scheduledAt = new Date(input.scheduledAt);
  if (Number.isNaN(scheduledAt.getTime())) throw new Error("INVALID_SCHEDULED_AT");
  const teams = await prisma.tournamentTeam.findMany({
    where: { tournamentId, teamId: { in: [input.teamAId, input.teamBId] } },
    select: { teamId: true }
  });
  if (teams.length !== 2 || input.teamAId === input.teamBId) {
    throw new Error("TEAM_NOT_IN_TOURNAMENT");
  }
  const normalizedCourt = normalizeCourt(input.court);
  if (normalizedCourt) {
    await ensureNoCourtTimeConflict({ tournamentId, scheduledAt, court: normalizedCourt });
  }
  await prisma.match.create({
    data: {
      tournamentId,
      scheduledAt,
      court: normalizedCourt,
      jerseyInfo: input.jerseyInfo ?? null,
      scoreA: input.scoreA ?? null,
      scoreB: input.scoreB ?? null,
      teamAId: input.teamAId,
      teamBId: input.teamBId
    }
  });
  return tournamentId;
}
async function updateMatchForTournament(tournamentId, matchId, input, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const existingMatch = await prisma.match.findUnique({
    where: { id: matchId },
    select: { id: true, tournamentId: true }
  });
  if (!existingMatch || existingMatch.tournamentId !== tournamentId) throw new Error("MATCH_NOT_FOUND");
  const scheduledAt = new Date(input.scheduledAt);
  if (Number.isNaN(scheduledAt.getTime())) throw new Error("INVALID_SCHEDULED_AT");
  const teams = await prisma.tournamentTeam.findMany({
    where: { tournamentId, teamId: { in: [input.teamAId, input.teamBId] } },
    select: { teamId: true }
  });
  if (teams.length !== 2 || input.teamAId === input.teamBId) {
    throw new Error("TEAM_NOT_IN_TOURNAMENT");
  }
  const normalizedCourt = normalizeCourt(input.court);
  if (normalizedCourt) {
    await ensureNoCourtTimeConflict({
      tournamentId,
      scheduledAt,
      court: normalizedCourt,
      excludeMatchId: matchId
    });
  }
  await prisma.match.update({
    where: { id: matchId },
    data: {
      scheduledAt,
      court: normalizedCourt,
      jerseyInfo: input.jerseyInfo ?? null,
      scoreA: input.scoreA ?? null,
      scoreB: input.scoreB ?? null,
      teamAId: input.teamAId,
      teamBId: input.teamBId
    }
  });
  return tournamentId;
}
async function deleteMatchForTournament(tournamentId, matchId, ownerUserId) {
  await getOwnedTournamentMeta(tournamentId, ownerUserId);
  const existingMatch = await prisma.match.findUnique({
    where: { id: matchId },
    select: { id: true, tournamentId: true }
  });
  if (!existingMatch || existingMatch.tournamentId !== tournamentId) throw new Error("MATCH_NOT_FOUND");
  await prisma.match.delete({ where: { id: matchId } });
  return tournamentId;
}

export { addClassifiersToTournament as a, removeRefereeFromTournament as b, createMatchForTournament as c, deleteMatchForTournament as d, addRefereesToTournament as e, removeTeamFromTournament as f, addTeamsToTournament as g, deleteTournament as h, getTournamentWithDetailsForOwner as i, updateTournamentWithDetails as j, listTournamentsWithDetails as k, listMatchesForTournament as l, createTournamentWithDetails as m, removeClassifierFromTournament as r, setTournamentTeamPlayers as s, updateMatchForTournament as u };
