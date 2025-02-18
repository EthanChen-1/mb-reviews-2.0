"use server";
import { PrismaClient } from "@prisma/client";
import { MOUSE_RANKING_LIMIT } from "../constants";

export async function getMouseRankings() {
  const prisma = new PrismaClient();

  const data = await prisma.mouse.findMany({
    take: MOUSE_RANKING_LIMIT,
    orderBy: { rank: "asc" },
  });

  return data;
}
