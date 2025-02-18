import React from "react";
import { Crown } from "lucide-react";
import { Mouse } from "@/types";

export default function MouseRanking({ data }: { data: Mouse[] }) {
  return (
    <div>
      <h2 className="h2-bold">Mouse Ranking</h2>
      <ol className="list-decimal pl-4">
        {data.map((mouse: Mouse) => {
          if (mouse.rank === 1) {
            return (
              <li key={mouse.id} className="text-lg text-yellow-500">
                <div className="flex">
                  <p>{mouse.company + " " + mouse.name}</p>
                  <Crown className="ml-1 place-self-center" />
                </div>
              </li>
            );
          } else if (mouse.rank === 2) {
            return (
              <li key={mouse.id} className="text-lg text-neutral-500">
                <p>{mouse.company + " " + mouse.name}</p>
              </li>
            );
          } else if (mouse.rank === 3) {
            return (
              <li key={mouse.id} className="text-lg text-orange-800">
                <p>{mouse.company + " " + mouse.name}</p>
              </li>
            );
          }
          return (
            <li key={mouse.id} className="text-sm">
              {mouse.company + " " + mouse.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
