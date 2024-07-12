import { HoverEffect } from "@/components/card-hover-effect";


export function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8" id="skills">
        <p className="text-3xl lg:text-6xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 dark:from-blue-300 to-neutral-300">My Skills</p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "",
  },
];
