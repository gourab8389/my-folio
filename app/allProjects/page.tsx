"use client"
import { CardBody, CardContainer, CardItem } from '@/components/3d-card'
import { ModeToggle } from '@/components/toggleMode'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface ProjectItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  gitLink: string;
  link: string;
}


const getProjects = async (): Promise<{ projects: ProjectItem[] }> => {
  try {
    const res = await fetch("/api/projects", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await res.json();
    return { projects: data.projects };
  } catch (error) {
    console.log("Error loading Projects", error);
    return { projects: [] };
  }
};





const allProjects: React.FC = () => {

  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data.projects);
    };
    fetchProjects();
  }, []);




  return (


    <main className="relative flex flex-col overflow-clip h-auto lg:h-auto w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.5]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-700 bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="absolute top-0 left-5 flex ml-5 mt-5">
        <ModeToggle />
      </div>

      <div id="projects" className="px-6 md:px-12 lg:px-24 py-12">
        <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400 dark:to-slate-600 mb-8">
          All of My Projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((item) => (
            <CardContainer key={item._id} className="inter-var" containerClassName="p-4">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border border-gray-300">
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
                    key={item._id}
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
      </div>
    </main>
  )
}

export default allProjects
