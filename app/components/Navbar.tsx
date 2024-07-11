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
import { FcMenu } from "react-icons/fc";
  
  
  export function Navbar () {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger><FcMenu /></MenubarTrigger>
          <MenubarContent>
              {navItems.map((item)=>(
            <MenubarItem>
                {item.name}
            </MenubarItem>
              ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  