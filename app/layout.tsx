import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { ModeToggle } from "@/components/toggleMode";
import MobileNavbar from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My-Folio",
  description: "Portfolio by Gourab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        ><div className="relative flex flex-col overflow-clip h-auto w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
          <div className="absolute flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

          {children}
          <Toaster />
          <div className="fixed left-3  lg:top-[30rem] hidden md:block">
            <ModeToggle />
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
