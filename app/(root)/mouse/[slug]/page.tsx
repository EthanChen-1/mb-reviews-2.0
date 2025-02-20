import React from "react";
import { getMouseBySlug } from "@/lib/actions/mouse-actions";
import { notFound } from "next/navigation";
import { Crown } from "lucide-react";
import Image from "next/image";

export default async function MouseDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const mouse = await getMouseBySlug(slug);
  if (!mouse) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <div className="space-y-4">
              <Image
                className="object-scale-down w-[500px] h-[500px]"
                src={`/images/${mouse.slug}.jpg`}
                width={500}
                height={500}
                alt={`A picture of the ${mouse.name}`}
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-6">
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
