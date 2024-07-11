import { ModeToggle } from "@/components/toggleMode";
import About from "./components/About";


export default function Home() {
  return (
    <main className="relative flex flex-col overflow-clip h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex ml-5 mt-5">
        <ModeToggle />
        </div>
        <div className="flex items-center justify-center">
          <About/>
        </div>
    </main>
  );
}
