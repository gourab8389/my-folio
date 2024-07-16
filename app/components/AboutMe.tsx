"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
    return (
        <div className="max-w-5xl mx-1 px-8 " id="about">
            <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-slate-600">
                About Me
            </p>

            <div className="flex flex-col lg:flex-row w-[25rem] lg:w-[60rem] p-4 lg:p-16 h-[40rem] lg:h-[27rem] items-center justify-center gap-5">
                <div className="flex mt-1 lg:ml-2 rounded-lg">
                    <Image src={'/profileImg.png'} alt={'me'} height={200} width={200} className='rounded' />
                </div>
                <div className="flex items-center justify-center w-3/4 lg:w-1 h-0.5 lg:h-1/2 dark:bg-neutral-900 bg-neutral-200 rounded-lg lg:ml-[1rem]"></div>
                <div className="mt-[1rem] lg:mt-0 text-center  lg:w-[60rem] lg:ml-[2rem] h-80 ">
                    <p className='font-semibold lg:text-xl dark:text-white lg:mt-[3rem] text-left'>I'm Full-stack developer with expertise in TypeScript, React, Next.js, Node.js, and database technologies (MongoDB/PostgreSQL/Supabase) utilizing Prisma for efficient data access. Proven ability to deliver user-centered web applications with a focus on intuitive experiences and user interaction.</p>
                    <p className='text-left'>Seeking for Web Development opportunities where I can leverage my skills to create meaningful connections between products and users.</p>
                    <p className='text-left mt-2'>So if you are interested,
                        <Link href={'#contact'}>
                        <span className="font-semibold cursor-pointer" style={{ borderBottom: '2px solid currentColor' }}>
                            Contact me!
                        </span>
                        </Link>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
