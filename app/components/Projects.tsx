"use client";
import { WobbleCard } from "@/components/wobble-card";
import { projects } from "@/data";
import Link from "next/link";
import React from "react";

export function Projects() {
  return (
    <div id="projects" className="">
        <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400">My Some of Projects</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-12 w-full">
      {projects.map((item) => (
        <Link href={item.link} key={item.id}>
          <WobbleCard
            containerClassName="col-span-1 min-h-[200px]"
            backgroundImage={item.img}
          >
            <h2 className="max-w-60  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] bg-gradient-to-b from-blue-600 to-pink-600 z-20 bg-clip-text text-transparent">
              {item.title}
            </h2>
            <p className="top-10 max-w-[26rem] text-left text-base/4  font-semibold bg-gradient-to-b from-gray-800 to-pink-800 z-20 bg-clip-text text-transparent">
              {item.des}
            </p>
          </WobbleCard>
        </Link>
      ))}
    </div>
    </div>
  );
}