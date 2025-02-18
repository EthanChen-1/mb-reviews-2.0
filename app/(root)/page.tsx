import VideoList from "@/components/shared/video/video-list";
import { testData } from "@/db/test-data";
import { getMouseRankings } from "@/lib/actions/mouse-actions";

export default async function Homepage() {
  const mouseRankings = await getMouseRankings();
  console.log(mouseRankings);
  return (
    <>
      <VideoList data={testData} title="Latest Videos" />
      <h2 className="h2-bold">Mouse Ranking</h2>
      <ol className="list-decimal pl-4">
        {mouseRankings.map((mouse) => {
          return <li key={mouse.id}>{mouse.company + " " + mouse.name}</li>;
        })}
      </ol>
    </>
  );
}
