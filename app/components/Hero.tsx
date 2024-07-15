import { HoverBorderGradient } from '@/components/hover-border-gradient'
import { HeroText, TextGenerateEffect } from '@/components/text-generate-effect'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Hero = () => {
  const words = [
    {
      text: "Build scalable and reliable web",
    },
    {
      text: "applications from stable backend",
    },
    {
      text: "and frontend libraries and",
    },
    {
      text: "frameworks that work and",
    },
    {
      text: "generate revenue for you!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div id='#hero' className='py-48 px-7'>
      <div className="text-4xl sm:text-7xl font-bold relative text-center">
      <TextGenerateEffect words='Hi, Gourab here
      a fullstack web developer.' />
      </div>
      <div className=" text-center px-4 sm:px-10 md:px-20 mt-5">
        <HeroText words='Build scalable and reliable web applications from stable backend and frontend libraries and frameworks that work and generate revenue for you!'/>
      </div>


      <div className="flex items-center justify-center mt-5">
      <Link href={'https://github.com/gourab8389'}>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span className='flex flex-row gap-1'>Connect with Github<p>{" "}<FaGithub className='mt-1'/></p></span>
      </HoverBorderGradient>
      </Link>
      </div>
    </div>
  )
}

export default Hero
