"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { HoverBorderGradient } from "@/components/hover-border-gradient";

export function Feedback() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  
  return (
    <div id="feedback" className="max-w-lg w-full mx-10 rounded-none md:rounded-2xl p-8 md:p-8 shadow-input bg-gray-100 dark:bg-gray-950 mt-10 border border-gray-800">
      <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400">
        Feedback
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="xyz" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="abc" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="xyz@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="description">Feedback</Label>
          <Input id="description" placeholder="feedback" type="text" />
        </LabelInputContainer>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <HoverBorderGradient
          containerClassName="rounded-full ml-40"
          as="button"
          className="bg-gradient-to-br from-gray-300 to-blue-300 border border-black text-black dark:text-white flex items-center space-x-2"
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
