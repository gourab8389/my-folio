"use client"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/navbar-menu";
import { ModeToggle } from "@/components/toggleMode";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";



export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 hidden md:flex items-center justify-center", className)}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <div className="flex items-center justify-center px-5 hover:bg-white hover:dark:bg-gray-950 rounded-2xl">
            <Link key={item.name} href={item.link} className="font-bold">
              <MenuItem key={item.name} setActive={setActive} active={active} item={item.name}/>
            </Link>
          </div>
        ))}
        <div className="flex items-center justify-center">
        <ModeToggle />
        </div>
      </Menu>
    </div>
  );
}
