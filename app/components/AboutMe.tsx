"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex items-center justify-center flex-col py-20" id="about">
            <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-slate-600">
                About Me
            </p>

            <div className="flex flex-col md:flex-row px-2 md:px-20 2xl:px-40 py-20 items-center justify-center gap-5 ">
                <div className="flex mt-1 items-center justify-center rounded-lg md:w-1/2">
                    <Image src={'/profileImg.png'} alt={'me'} height={200} width={200} className='rounded md:w-full md:h-full' />
                </div>
                
                <div className="px-5 md:px-10 2xl:px-40">
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
