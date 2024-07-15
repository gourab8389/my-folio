import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
    return (
        <div className="max-w-5xl mx-auto px-8" id="about">
            <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-slate-600">
                About Me
            </p>

            <div className="flex flex-col lg:flex-row bg-gray-300 w-[25rem] lg:w-[60rem] p-4 lg:p-16 h-[40rem] lg:h-[30rem] items-center justify-center gap-5">
                <div className="flex mt-1 bg-blue-300 lg:ml-2">
                    <Image src={'/search-engine.png'} alt={'me'} height={800} width={700} className='rounded'/>
                </div>
                <div className="flex items-center justify-center w-full lg:w-3 h-1 lg:h-full dark:bg-neutral-950 bg-neutral-500 rounded-lg lg:ml-[1rem]"></div>
                <div className="mt-[1rem] lg:mt-0 text-center lg:text-left lg:w-[60rem] bg-pink-300 lg:ml-[2rem] h-80 ">
                <p>I'm Full-stack developer with expertise in TypeScript, React, Next.js, Node.js, and database technologies (MongoDB/PostgreSQL/MySQL) utilizing Prisma for efficient data access. Proven ability to deliver user-centered web applications with a focus on intuitive experiences and user interaction.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
