'use client';

import React from 'react';
import SkillDataProvider from '@/components/SkillDataProvider';
import { skills } from '@/data';

export function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8 " id="skills">
      <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-slate-600">
        My Skills
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 w-full lg:w-4/5 mx-auto my-[3rem]">
        {skills.map((item) => (
          <div className="">
              
          <div key={item.id} className="flex gap-4 p-4 rounded-full lg:rounded-lg  items-center bg-gray-50 dark:bg-black shadow-md hover:bg-slate-100 dark:hover:bg-slate-950 border dark:border-gray-950">
            <SkillDataProvider 
            key={item.id}
              src={item.image} 
              width={30} 
              height={30} 
              index={item.id} 
              className={"rounded-full bg-white border border-white"} 
            />
            <span className="text-xs lg:text-md font-semibold text-black dark:text-white">{item.name}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
