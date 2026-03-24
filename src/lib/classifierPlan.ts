import { prisma } from "@/lib/prisma";
import type { ClassifierPlanEntry, UpsertClassifierPlanEntryDto } from "@/types";

function normalizeClassification(value: number | undefined) {
  if (value == null) return null;
  if (!Number.isFinite(value)) throw new Error("INVALID_CLASSIFICATION");
  return value;
}

async function ensureTournamentExists(tournamentId: string) {
  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
    select: { id: true },
  });
  if (!tournament) throw new Error("TOURNAMENT_NOT_FOUND");
}

async function getDefaultClassifierId(tournamentId: string) {
  const classifier = await prisma.tournamentClassifier.findFirst({
    where: { tournamentId },
    orderBy: { classifierId: "asc" },
    select: { classifierId: true },
  });
  if (!classifier) throw new Error("NO_CLASSIFIER_IN_TOURNAMENT");
  return classifier.classifierId;
}

async function ensurePlayerInTournament(tournamentId: string, playerId: string) {
  const exists = await prisma.player.findFirst({
    where: {
      id: playerId,
      team: {
        tournaments: {
          some: { tournamentId },
        },
      },
    },
    select: { id: true },
  });
  if (!exists) throw new Error("PLAYER_NOT_IN_TOURNAMENT");
}

export async function listClassifierPlanForTournament(tournamentId: string): Promise<ClassifierPlanEntry[]> {
  await ensureTournamentExists(tournamentId);

  const exams = await prisma.classificationExam.findMany({
    where: {
      tournamentId,
      scheduledAt: { not: null },
    },
    orderBy: { scheduledAt: "asc" },
    select: {
      id: true,
      playerId: true,
      scheduledAt: true,
      result: true,
    },
  });

  return exams
    .filter((exam) => exam.scheduledAt != null)
    .map((exam) => ({
      examId: exam.id,
      playerId: exam.playerId,
      scheduledAt: exam.scheduledAt!.toISOString(),
      classification: exam.result ?? undefined,
    }));
}

export async function createClassifierPlanEntryForTournament(
  tournamentId: string,
  input: UpsertClassifierPlanEntryDto
): Promise<string> {
  await ensureTournamentExists(tournamentId);
  await ensurePlayerInTournament(tournamentId, input.playerId);

  const scheduledAt = new Date(input.scheduledAt);
  if (Number.isNaN(scheduledAt.getTime())) throw new Error("INVALID_SCHEDULED_AT");

  const classifierId = await getDefaultClassifierId(tournamentId);

  const created = await prisma.classificationExam.create({
    data: {
      tournamentId,
      playerId: input.playerId,
      classifierId,
      scheduledAt,
      result: normalizeClassification(input.classification),
    },
    select: { id: true },
  });

  return created.id;
}

export async function updateClassifierPlanEntryForTournament(
  tournamentId: string,
  examId: string,
  input: UpsertClassifierPlanEntryDto
): Promise<string> {
  await ensureTournamentExists(tournamentId);
  await ensurePlayerInTournament(tournamentId, input.playerId);

  const existing = await prisma.classificationExam.findUnique({
    where: { id: examId },
    select: { id: true, tournamentId: true },
  });
  if (!existing || existing.tournamentId !== tournamentId) throw new Error("EXAM_NOT_FOUND");

  const scheduledAt = new Date(input.scheduledAt);
  if (Number.isNaN(scheduledAt.getTime())) throw new Error("INVALID_SCHEDULED_AT");

  await prisma.classificationExam.update({
    where: { id: examId },
    data: {
      playerId: input.playerId,
      scheduledAt,
      result: normalizeClassification(input.classification),
    },
  });

  return examId;
}

export async function deleteClassifierPlanEntryForTournament(tournamentId: string, examId: string): Promise<string> {
  await ensureTournamentExists(tournamentId);

  const existing = await prisma.classificationExam.findUnique({
    where: { id: examId },
    select: { id: true, tournamentId: true },
  });
  if (!existing || existing.tournamentId !== tournamentId) throw new Error("EXAM_NOT_FOUND");

  await prisma.classificationExam.delete({ where: { id: examId } });
  return examId;
}
