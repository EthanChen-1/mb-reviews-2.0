import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  await prisma.mouse.deleteMany();
  await prisma.mouse.createMany({
    data: [
      { name: "Maya X", company: "Lamzu", rank: 2 },
      { name: "XM2 8K", company: "EndGame Gear", rank: 3 },
      { name: "OP1 8K", company: "EndGame Gear", rank: 1 },
      { name: "DeathAdder V3 Pro", company: "Razer", rank: 5 },
      { name: "X2H", company: "Pulsar", rank: 4 },
      { name: "Viper Mini", company: "Razer", rank: 6 },
    ],
  });

  console.log("Database seeded successfully!");
}

main();
