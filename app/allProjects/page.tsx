"use client"

import { CardBody, CardContainer, CardItem } from '@/components/3d-card'
import { HoverBorderGradient } from '@/components/hover-border-gradient'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { PageLoader } from '../components/loader'

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

const AllProjects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const data = await getProjects();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen w-full dark:bg-black bg-white">
      {/* Background pattern - Preloaded and always visible */}
      <div className="fixed inset-0 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] pointer-events-none" />
      <div className="fixed inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="absolute top-0 right-5 flex mr-5 mt-5">
          <Link href={'/'}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className='flex flex-row gap-1'>Back</span>
            </HoverBorderGradient>
          </Link>
        </div>

        <div id="projects" className="px-6 md:px-12 lg:px-24 py-12 mt-5">
          <h1 className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400 dark:to-slate-600 mb-8">
            All of My Projects
          </h1>

          {isLoading ? (
            <PageLoader />
          ) : (
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
                        src={item.imageUrl}
                        alt={item.title}
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg"
                        priority={true}
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
          )}
        </div>
      </div>
    </main>
  )
}

export default AllProjects