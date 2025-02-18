import MouseRanking from "@/components/shared/ranking/mouse-ranking";
import VideoList from "@/components/shared/video/video-list";
import { testData } from "@/db/test-data";
import { getMouseRankings } from "@/lib/actions/mouse-actions";

export default async function Homepage() {
  const mouseRankings = await getMouseRankings();
  return (
    <>
      <VideoList data={testData} title="Latest Videos" />
      <MouseRanking data={mouseRankings} />
    </>
  );
}
