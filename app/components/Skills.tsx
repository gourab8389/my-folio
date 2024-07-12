import { HoverEffect } from "@/components/card-hover-effect";
import { skills } from "@/data";


export function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8" id="skills">
        <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400">My Skills</p>
      <HoverEffect items={skills} />
    </div>
  );
}

