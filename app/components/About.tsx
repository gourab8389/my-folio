import { HoverBorderGradient } from '@/components/hover-border-gradient'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='#about' className='py-48'>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-500 text-center">
      Hi, Gourab here
      a web developer.
      </p>
      <p className='text-2xl sm:text-3xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-pink-400 text-center px-20 mt-5'> build scalable and reliable web applications from stable backend and frontend libraries and frameworks that work and generate revenue for you !</p>

      <div className="flex items-center justify-center mt-5">
      <Link href={'https://github.com/gourab8389'}>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span>Connect with Github</span>
      </HoverBorderGradient>
      </Link>
      </div>
    </div>
  )
}

export default About
