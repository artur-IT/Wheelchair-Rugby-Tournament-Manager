import { prisma } from './prisma_lW-FDGGq.mjs';

function normalizeClassification(value) {
  if (value == null) return null;
  if (!Number.isFinite(value)) throw new Error("INVALID_CLASSIFICATION");
  if (value < 0 || value > 4) throw new Error("INVALID_CLASSIFICATION");
  if (!Number.isInteger(value * 2)) throw new Error("INVALID_CLASSIFICATION");
  return value;
}
function mustBeValidDate(d, code) {
  if (Number.isNaN(d.getTime())) throw new Error(code);
}
function ensureStartBeforeEnd(start, end) {
  if (end.getTime() <= start.getTime()) throw new Error("INVALID_ENDS_AT");
}
async function ensureTournamentOwned(tournamentId, ownerUserId) {
  const tournament = await prisma.tournament.findFirst({
    where: { id: tournamentId, season: { ownerUserId } },
    select: { id: true }
  });
  if (!tournament) throw new Error("TOURNAMENT_NOT_FOUND");
}
async function getDefaultClassifierId(db, tournamentId) {
  const classifier = await db.tournamentClassifier.findFirst({
    where: { tournamentId },
    orderBy: { classifierId: "asc" },
    select: { classifierId: true }
  });
  if (!classifier) throw new Error("NO_CLASSIFIER_IN_TOURNAMENT");
  return classifier.classifierId;
}
async function ensurePlayerInTournament(tournamentId, playerId) {
  const exists = await prisma.player.findFirst({
    where: {
      id: playerId,
      team: {
        tournaments: {
          some: { tournamentId }
        }
      }
    },
    select: { id: true }
  });
  if (!exists) throw new Error("PLAYER_NOT_IN_TOURNAMENT");
}
async function ensureNoTimeConflict(db, args) {
  const exams = await db.classificationExam.findMany({
    where: {
      tournamentId: args.tournamentId,
      scheduledAt: { not: null },
      id: args.excludeExamId ? { not: args.excludeExamId } : void 0
    },
    select: { scheduledAt: true, endsAt: true }
  });
  for (const e of exams) {
    if (!e.scheduledAt) continue;
    const start = e.scheduledAt;
    const end = e.endsAt ?? new Date(start.getTime() + 30 * 60 * 1e3);
    if (args.scheduledAt.getTime() < end.getTime() && start.getTime() < args.endsAt.getTime()) {
      throw new Error("TIME_CONFLICT");
    }
  }
}
async function listClassifierPlanForTournament(tournamentId, ownerUserId) {
  await ensureTournamentOwned(tournamentId, ownerUserId);
  const exams = await prisma.classificationExam.findMany({
    where: {
      tournamentId,
      scheduledAt: { not: null }
    },
    orderBy: { scheduledAt: "asc" },
    select: {
      id: true,
      playerId: true,
      scheduledAt: true,
      endsAt: true,
      result: true,
      observation: true
    }
  });
  const scheduledExams = exams.filter((exam) => exam.scheduledAt != null);
  return scheduledExams.map((exam) => {
    const start = exam.scheduledAt ?? /* @__PURE__ */ new Date(0);
    const end = exam.endsAt ?? new Date(start.getTime() + 30 * 60 * 1e3);
    return {
      examId: exam.id,
      playerId: exam.playerId,
      scheduledAt: start.toISOString(),
      endsAt: end.toISOString(),
      classification: exam.result ?? void 0,
      observation: exam.observation
    };
  });
}
async function createClassifierPlanEntryForTournament(tournamentId, input, ownerUserId) {
  await ensureTournamentOwned(tournamentId, ownerUserId);
  await ensurePlayerInTournament(tournamentId, input.playerId);
  const scheduledAt = new Date(input.scheduledAt);
  mustBeValidDate(scheduledAt, "INVALID_SCHEDULED_AT");
  const endsAt = new Date(input.endsAt);
  mustBeValidDate(endsAt, "INVALID_ENDS_AT");
  ensureStartBeforeEnd(scheduledAt, endsAt);
  return await prisma.$transaction(
    async (tx) => {
      await ensureNoTimeConflict(tx, { tournamentId, scheduledAt, endsAt });
      const classifierId = await getDefaultClassifierId(tx, tournamentId);
      const created = await tx.classificationExam.create({
        data: {
          tournamentId,
          playerId: input.playerId,
          classifierId,
          scheduledAt,
          endsAt,
          result: normalizeClassification(input.classification),
          observation: input.observation ?? false
        },
        select: { id: true }
      });
      return created.id;
    },
    { isolationLevel: "Serializable" }
  );
}
async function updateClassifierPlanEntryForTournament(tournamentId, examId, input, ownerUserId) {
  await ensureTournamentOwned(tournamentId, ownerUserId);
  await ensurePlayerInTournament(tournamentId, input.playerId);
  const existing = await prisma.classificationExam.findUnique({
    where: { id: examId },
    select: { id: true, tournamentId: true }
  });
  if (!existing || existing.tournamentId !== tournamentId) throw new Error("EXAM_NOT_FOUND");
  const scheduledAt = new Date(input.scheduledAt);
  mustBeValidDate(scheduledAt, "INVALID_SCHEDULED_AT");
  const endsAt = new Date(input.endsAt);
  mustBeValidDate(endsAt, "INVALID_ENDS_AT");
  ensureStartBeforeEnd(scheduledAt, endsAt);
  await prisma.$transaction(
    async (tx) => {
      await ensureNoTimeConflict(tx, { tournamentId, scheduledAt, endsAt, excludeExamId: examId });
      await tx.classificationExam.update({
        where: { id: examId },
        data: {
          playerId: input.playerId,
          scheduledAt,
          endsAt,
          result: normalizeClassification(input.classification),
          observation: input.observation ?? false
        }
      });
    },
    { isolationLevel: "Serializable" }
  );
  return examId;
}
async function deleteClassifierPlanEntryForTournament(tournamentId, examId, ownerUserId) {
  await ensureTournamentOwned(tournamentId, ownerUserId);
  const existing = await prisma.classificationExam.findUnique({
    where: { id: examId },
    select: { id: true, tournamentId: true }
  });
  if (!existing || existing.tournamentId !== tournamentId) throw new Error("EXAM_NOT_FOUND");
  await prisma.classificationExam.delete({ where: { id: examId } });
  return examId;
}

export { createClassifierPlanEntryForTournament as c, deleteClassifierPlanEntryForTournament as d, listClassifierPlanForTournament as l, updateClassifierPlanEntryForTournament as u };
