import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { Mouse } from "@/types";

export default function MouseCard({ mouse }: { mouse: Mouse }) {
  let row = "row-start-5";
  let bgColor = "bg-white";
  if (mouse.rank === "S") {
    row = "row-start-1";
    bgColor = "bg-red-500";
  } else if (mouse.rank === "A") {
    row = "row-start-2";
    bgColor = "bg-orange-500";
  } else if (mouse.rank === "B") {
    row = "row-start-3";
    bgColor = "bg-orange-300";
  } else if (mouse.rank === "C") {
    row = "row-start-4";
    bgColor = "bg-yellow-300";
  } else if (mouse.rank === "D") {
    row = "row-start-5";
    bgColor = "bg-lime-300";
  } else {
    bgColor = "bg-white";
  }
  return (
    <Card className={`w-full max-w-sm ${row}`}>
      <CardHeader className={`p-2 items-center rounded-t-md ${bgColor}`}>
        {mouse.rank}
      </CardHeader>
      <CardContent className="p-2 grid gap-4">
        <Link href={`/mouse/${mouse.slug}`}>
          {mouse.company + " " + mouse.name}
        </Link>
      </CardContent>
    </Card>
  );
}
