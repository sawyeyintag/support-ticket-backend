import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();

async function main() {}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
