import { HoverBorderGradient } from '@/components/hover-border-gradient'
import { HeroText, TextGenerateEffect } from '@/components/text-generate-effect'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GrResume } from "react-icons/gr";

const Hero = () => {
  return (
    <div id='#hero' className='mt-[11rem] 2xl:mt-[15rem] mb-20 2xl:mb-40 items-center justify-center px-5 md:px-10 2xl:px-10'>
      <div className="text-4xl sm:text-7xl font-bold relative text-center">
        <TextGenerateEffect words='Hi, Gourab here
      a fullstack web developer.' />
      </div>
      <div className="text-center mt-5 md:px-24">
        <HeroText words='Build scalable and reliable web applications from stable backend and frontend libraries and frameworks that work and generate revenue for you!' />
      </div>


      <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-center">

        <div className="flex items-center justify-center mt-5">
          <Link href={'https://github.com/gourab8389'}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >

              <span className='flex flex-row gap-1'>Connect with Github<p>{" "}<FaGithub className='mt-1' /></p></span>
            </HoverBorderGradient>
          </Link>
        </div>




        <div className="flex items-center justify-center mt-5">
          <Link href={''}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >

              <span className='flex flex-row gap-1'>Resume<p>{" "}<GrResume className='mt-1' /></p></span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
