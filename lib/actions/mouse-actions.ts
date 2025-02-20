"use server";
import { MOUSE_RANKING_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

export async function getMouseRankings() {
  const data = await prisma.mouse.findMany({
    take: MOUSE_RANKING_LIMIT,
    orderBy: { rank: "asc" },
  });

  return convertToPlainObject(data);
}

export async function getMouseBySlug(slug: string) {
  const data = await prisma.mouse.findFirst({
    where: { slug: slug },
  });
  return convertToPlainObject(data);
}
