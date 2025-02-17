import VideoList from "@/components/shared/video/video-list";
import { testData } from "@/db/test-data";

export default function Homepage() {
  return (
    <>
      <VideoList data={testData} title="Latest Videos" />
    </>
  );
}
