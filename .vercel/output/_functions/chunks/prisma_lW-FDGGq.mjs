import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis;
function createPrismaClient() {
  const connectionString = "postgresql://postgres:ArturIT@localhost:5432/wheelchair_rugby";
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}
const prisma = globalForPrisma.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };
