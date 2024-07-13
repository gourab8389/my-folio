"use client";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { WobbleCard } from "@/components/wobble-card";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Projects() {
  return (
    <div id="projects" className="">
        <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400">Some of My Projects</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto p-24 w-full">
      {projects.map((item) => (
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {item.des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image src={item.img} alt={item.title} height={50} width={50}/>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href={''}>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Github →
          </CardItem>
          </Link>
          <Link href={item.link}>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live Site
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>

        // <Link href={item.link} key={item.id}>
        //   <WobbleCard
        //     containerClassName="col-span-1 min-h-[200px]"
        //     backgroundImage={item.img}
        //   >
        //     <h2 className="max-w-60  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] bg-gradient-to-b from-blue-600 to-pink-600 z-20 bg-clip-text text-transparent">
        //       {item.title}
        //     </h2>
        //     <p className="top-10 max-w-[26rem] text-left text-base/4  font-semibold bg-gradient-to-b from-gray-800 to-pink-800 z-20 bg-clip-text text-transparent">
        //       {item.des}
        //     </p>
        //   </WobbleCard>
        // </Link>
      ))}
    </div>
    </div>
  );
}