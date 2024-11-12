"use client"
import { Loader } from "lucide-react"


export const PageLoader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen gap-2">
      <Loader className="size-6 animate-spin" />
    </div>
  )
}