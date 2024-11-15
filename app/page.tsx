import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Feedback } from "./components/Feedback";
import Footer from "./components/Footer";
import { Experiences } from "./components/Experiences";
import { Spotlight } from "@/components/Spotlight";
import Hero from "./components/Hero";
import MobileNavbar from "@/components/MobileNav";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-clip h-auto w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] max-w-7xl mx-auto">
      <div className="absolute flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute top-0 right-5 mt-5">
        <Navbar />
      </div>

      <div className="fixed top-5 right-4 block lg:hidden z-50">
        <MobileNavbar />
      </div>
      <div className="px-3">
          <Hero />
          <AboutMe />
          <Skills />
          <Experiences />
          <Projects />
          <Feedback />
        <Footer />
      </div>
    </main>
  );
}
