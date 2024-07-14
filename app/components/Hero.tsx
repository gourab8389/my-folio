import { HoverBorderGradient } from '@/components/hover-border-gradient'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id='#hero' className='py-48 px-7'>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-400 dark:from-blue-300 to-slate-800 dark:to-neutral-300 text-center">
      Hi, Gourab here
      a fullstack web developer.
      </p>
      <p className="text-xl sm:text-2xl md:text-3xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-600 dark:from-blue-400 to-pink-500 dark:to-pink-300 text-center px-4 sm:px-10 md:px-20 mt-5">
        Build scalable and reliable web applications from stable backend and frontend libraries and frameworks that work and generate revenue for you!
      </p>


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
