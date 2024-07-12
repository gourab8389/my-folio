import { ModeToggle } from "@/components/toggleMode";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { navItems } from "@/data";
import { Skills } from "./components/Skills";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Feedback } from "./components/Feedback";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-clip h-auto w-full dark:bg-gray-700 bg-gray-200 dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-700 bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-0 left-5 flex ml-5 mt-5">
        <ModeToggle />
      </div>
      <div className="absolute top-0 right-5 mt-5">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center mt-5 mb-10">
      <FloatingNav navItems={navItems}/>
        <About />
        <Skills/>
        <Experiences/>
        <Projects/>
        <Feedback/>
      </div>
    </main>
  );
}
