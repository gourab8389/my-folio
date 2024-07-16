import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/data";
import Link from "next/link";
import { ModeToggle } from "./toggleMode";
import { TiThMenu } from "react-icons/ti";


const MobileNavbar = () => {


    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className=""><TiThMenu /></button>
            </SheetTrigger>
            <SheetContent>
                <div className="mt-10">
                {navItems.map((item) => (
                    <Link href={item.link}>
                        <div className="my-2 items-center dark:bg-slate-950 border border-black dark:hover:bg-gray-900 hover:bg-slate-200 rounded-md py-2 w-40 mx-[3rem]">
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