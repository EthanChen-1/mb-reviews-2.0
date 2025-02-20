import React from "react";
import { getMouseByID } from "@/lib/actions/mouse-actions";
import { notFound } from "next/navigation";
import { Crown } from "lucide-react";

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
              <div className="flex">
                <p>Mausbert Rank: {mouse.rank} </p>
                {mouse.rank === 1 ? (
                  <Crown className="ml-2 self-center text-yellow-500" />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </>
  );
}
