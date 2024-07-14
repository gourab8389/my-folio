// HoverEffect component
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
 
import { Meteors } from "./meteors";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    list: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`${item.title}-${idx}`}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
                <div className="space-y-2 bg-blue-200">
                  {item.list.map((skill, i) => (
                    <div key={i} className="text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Card component
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-8 overflow-hidden border border-gray-300 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        "bg-gray-100 dark:bg-black",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}
        <Meteors number={50} />
        </div>
      </div>
    </div>
  );
};

// CardTitle component
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide mt-4", "dark:text-zinc-100 text-black", className)}>
      {children}
    </h4>
  );
};

// CardDescription component
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-4 dark:text-zinc-400 text-zinc-900 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
