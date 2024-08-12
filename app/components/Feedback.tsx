"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/input";
import { Label } from "@/components/label";;
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { Textarea } from "@/components/ui/textarea";

export function Feedback() {
  return (
    <div className="flex items-center justify-center md:px-20 py-10">
      <div id="feedback" className="md:w-[42rem] w-full items-center justify-center flex rounded-xl md:rounded-2xl flex-col shadow-input bg-gray-50 dark:bg-black mt-10 border border-gray-200 dark:border-gray-900">

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
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea placeholder="Type your feedback here." itemType="text" name="feedback" className="mb-4 border border-neutral-950" />
          </LabelInputContainer>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex items-center justify-center w-full bg-red-500">
          <HoverBorderGradient
            containerClassName=" rounded-md"
            as="button"
            itemType="submit"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-center"
          >

            <span className='flex flex-row gap-1'>Send Feedback</span>
          </HoverBorderGradient>
          </div>
        </form>
      </div>
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
