"use client";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Projects() {
  return (
    <div id="projects" className="md:px-16 py-20 flex flex-col gap-16">
      <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-neutral-500 mb-8">
        Some of My Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-1 lg:mx-2">
        {projects.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-slate-900 border-black/[0.1] rounded-xl border border-gray-200 shadow-md px-5">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-3">
                <Image
                  key={item.id}
                  src={item.imageUrl}
                  alt={item.title}
                  layout="responsive"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.gitLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Github →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.link}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Live Site
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href={'/all-projects'}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black font-bold dark:text-white flex items-center space-x-2"
            >
              See All Projects
            </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
}
