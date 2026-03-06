import type { CreateTeamDto } from "@/types";
import { prisma } from "@/lib/prisma";

// Creates a new team in the database
export async function createTeam(data: CreateTeamDto) {
  return prisma.team.create({ data });
}
