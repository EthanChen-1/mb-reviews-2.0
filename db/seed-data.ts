import { PrismaClient } from "@prisma/client";
import { mouseTestData, userTestData } from "./test-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.mouse.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.mouse.createMany({
    data: mouseTestData,
  });

  await prisma.user.createMany({
    data: userTestData,
  });

  console.log("Database seeded successfully!");
}

main();
