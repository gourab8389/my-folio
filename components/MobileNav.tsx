import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data";
import Link from "next/link";
import { ModeToggle } from "./toggleMode";
import { MenuIcon } from "lucide-react";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex items-center justify-center p-2 border rounded-2xl bg-slate-50 dark:bg-slate-950 dark:border-slate-700">
        <button>
          <MenuIcon className="size-6 md:size-10" />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="py-20 flex flex-col items-center justify-between h-screen">
          <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link href={item.link}>
              <div className="my-2 items-center justify-center dark:bg-slate-950 border border-sky-900 dark:hover:bg-gray-900 hover:bg-slate-200 rounded-md py-2 w-40 mx-[3rem]">
                <SheetHeader>
                  <SheetTitle className="bg-clip-text self-center text-transparent bg-gradient-to-br from-blue-500 dark:from-blue-300 to-neutral-500 dark:to-slate-600">{item.name}</SheetTitle>
                </SheetHeader>
              </div>
            </Link>
          ))}
          </div>
          <div className="w-auto p-2 border border-sky-900 rounded-lg mb-20">
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
