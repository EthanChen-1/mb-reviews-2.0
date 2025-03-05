import VideoList from "@/components/shared/video/video-list";
import { testData } from "@/db/test-data";

export default async function Homepage() {
  return (
    <>
      <VideoList data={testData} title="Latest Videos" />
    </>
  );
}
