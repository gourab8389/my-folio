import { ModeToggle } from "@/components/toggleMode";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { navItems } from "@/data";
import { Skills } from "./components/Skills";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Feedback } from "./components/Feedback";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-clip h-auto w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute  flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
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
        <Footer/>
      </div>
    </main>
  );
}
