import { ModeToggle } from "@/components/toggleMode";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar";
import { navItems } from "@/data";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
  
  
  export function Navbar () {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger><FcMenu /></MenubarTrigger>
          <MenubarContent>
              {navItems.map((item)=>(
            <Link href={item.link}>
            <MenubarItem>
                {item.name}
            </MenubarItem>
            </Link>
              ))}
              <MenubarItem>
                <ModeToggle/>
              </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  