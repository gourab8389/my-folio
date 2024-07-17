"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/input";
import { Label } from "@/components/label";;
import { HoverBorderGradient } from "@/components/hover-border-gradient";

export function Feedback() {
  return (
    <div id="feedback" className="lg:w-[32rem] w-[25rem]  mx-10 sm:mx-4 rounded-xl md:rounded-2xl p-3 sm:p-8 shadow-input bg-gray-100 dark:bg-gray-950 mt-10 border border-gray-200 dark:border-gray-600">
      
      <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-slate-500 mt-5">
        Feedback
      </p>
      <form action="https://formspree.io/f/xjkbkyeo" method="POST" className="my-8 p-6">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="xyz" type="text" name="firstname" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="abc" type="text" name="lastname" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="xyz@fc.com" type="email" name="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="description">Feedback</Label>
          <Input id="description" placeholder="feedback" type="text" name="description" />
        </LabelInputContainer>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <HoverBorderGradient
        containerClassName=" flex rounded-md ml-[6rem] lg:ml-[8rem]"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-center"
      >
        
        <span className='flex flex-row gap-1'>Send Feedback</span>
      </HoverBorderGradient>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
