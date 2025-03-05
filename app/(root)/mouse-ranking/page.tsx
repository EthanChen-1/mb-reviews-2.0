import React from "react";
import MouseRanking from "@/components/shared/ranking/mouse-ranking";
import { getMouseRankings } from "@/lib/actions/mouse-actions";

export default async function MouseRankingPage() {
  const mouseRankings = await getMouseRankings();
  return <MouseRanking data={mouseRankings} />;
}
