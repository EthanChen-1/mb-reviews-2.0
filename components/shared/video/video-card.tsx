import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function VideoCard({ video }: { video: any }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <a
          href={`https://www.youtube.com/watch?v=${video.resourceId.videoId}`}
          target="_blank"
        >
          <Image
            src={video.thumbnails.maxres.url}
            alt={video.title}
            height={500}
            width={500}
            priority={true}
          />
        </a>
      </CardHeader>
      <CardContent className="p-2 grid gap-4">
        <a
          href={`https://www.youtube.com/watch?v=${video.resourceId.videoId}`}
          target="_blank"
        >
          <div className="text-sm font-medium">{video.title}</div>
        </a>
      </CardContent>
    </Card>
  );
}
