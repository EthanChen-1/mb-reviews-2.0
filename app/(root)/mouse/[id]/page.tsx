import React from "react";
import { getMouseByID } from "@/lib/actions/mouse-actions";
import { notFound } from "next/navigation";

export default async function MouseDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const mouse = await getMouseByID(id);
  if (!mouse) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2"></div>
          <div className="col-span-2">
            <div className="flex flex-col gap-2">
              <p>{mouse.company}</p>
              <h1 className="h3-bold">{mouse.name}</h1>
              <p>Mausbert Rank: {mouse.rank}</p>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </>
  );
}
