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
        >
          <div className="fixed top-5 right-2 block lg:hidden">
            <MobileNavbar />
          </div>
          {children}
          <Toaster />
          <div className="fixed left-3  lg:top-[30rem] hidden md:block">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
