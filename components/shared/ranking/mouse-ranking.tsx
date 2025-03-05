import React from "react";
import { Mouse } from "@/types";
import MouseCard from "../mouse/mouse-card";

export default function MouseRanking({ data }: { data: Mouse[] }) {
  console.log(data);
  return (
    <div>
      <h2 className="h2-bold mb-4">Mouse Rankings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((mouse: Mouse) => {
          return <MouseCard key={mouse.id} mouse={mouse} />;
        })}
      </div>
    </div>
  );
}
