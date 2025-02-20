import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  await prisma.mouse.deleteMany();
  await prisma.mouse.createMany({
    data: [
      { name: "Maya X", company: "Lamzu", rank: 2, slug: "lamzu-maya-x" },
      {
        name: "XM2 8K",
        company: "EndGame Gear",
        rank: 3,
        slug: "endgamegear-xm2-8k",
      },
      {
        name: "OP1 8K",
        company: "EndGame Gear",
        rank: 1,
        slug: "endgamegear-op1-8k",
      },
      {
        name: "DeathAdder V3 Pro",
        company: "Razer",
        rank: 5,
        slug: "razer-deathadder-v3-pro",
      },
      { name: "X2H", company: "Pulsar", rank: 4, slug: "pulsar-x2h" },
      {
        name: "Viper Mini",
        company: "Razer",
        rank: 6,
        slug: "razer-viper-mini",
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main();
