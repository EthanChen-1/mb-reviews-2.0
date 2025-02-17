import React from "react";
import VideoCard from "./video-card";

export default function VideoList({
  title,
  data,
}: {
  title: string;
  data: any;
}) {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.items.map((item: any) => {
            const videoData = item.snippet;
            return <VideoCard key={item.id} video={videoData} />;
          })}
        </div>
      ) : (
        <div>
          <p>No Videos Found</p>
        </div>
      )}
    </div>
  );
}
