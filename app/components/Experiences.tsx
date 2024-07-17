"use client";

import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { Button } from "@/components/MovingBorders";
import { workExperience } from "@/data";
import React from "react";

export function Experiences() {
  return (
    <div
      id="experiences"
      className="h-auto rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden gap-10"
    >
      <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-slate-500">
        My Experiences
      </p>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            containerClassName="dark:bg-black bg-[#f6f8f6]" 
            className="flex-1 text-black dark:text-white"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 md:p-5 lg:p-10 gap-2 w-[26rem] lg:w-[26rem]">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
