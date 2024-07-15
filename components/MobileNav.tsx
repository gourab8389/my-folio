import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";
import { navItems } from "@/data";
import Link from "next/link";
import { ModeToggle } from "./toggleMode";


const MobileNavbar = () => {


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <div className="mt-10">
                {navItems.map((item) => (
                    <Link href={item.link}>
                        <div className="my-2 items-center bg-slate-950 border border-black hover:bg-gray-900 rounded-md py-2 w-40 mx-[3rem]">
                        <SheetHeader>
                            <SheetTitle>{item.name}</SheetTitle>
                        </SheetHeader>
                    </div>
                    </Link>
                    
                ))}
                <div className="my-2 items-center hover:bg-gray-900 rounded-md py-2 w-40 ml-[7rem]">
                    <ModeToggle/>
                </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
