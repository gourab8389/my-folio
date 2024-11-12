"use client"

import { cn } from "@/lib/utils"

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("animate-spin relative h-6 w-6", className)}>
      <div className="h-full w-full rounded-full border-2 border-gray-200 border-t-blue-500" />
    </div>
  )
}

export const PageLoader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen gap-2">
      <Loader className="size-6 animate-spin" />
    </div>
  )
}