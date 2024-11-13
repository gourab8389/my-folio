"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { toast } from "sonner";
import ProjectPageContent from "@/app/components/admin/admin-project-page.tsx/project-content";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

const ClientProjectPage = () => {

    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const handleSubmit = () => {
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        toast.success("Successfully authenticated!");
      } else {
        setPassword("");
        toast.error("Invalid password. Please try again.");
      }
    };
  
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    };

  return (
    <main className="relative min-h-screen w-full dark:bg-black bg-white">
      {/* Background pattern */}
      <div className="fixed inset-0 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] pointer-events-none" />
      <div className="fixed inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] pointer-events-none" />

      {/* Content */}
      <div className="relative">
        {/* Back Button */}
        {!isAuthenticated && (
            <div className="p-6">
            <Link href={"/"}>
              <Button
                variant="outline"
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ← Back to Home
              </Button>
            </Link>
          </div>
        )}

        {/* Main Content */}
        <div className="flex min-h-[80vh] items-center justify-center px-4">
          {!isAuthenticated ? (
            <div className="w-full max-w-md space-y-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-lg">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter">
                  Admin Access
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Please enter your admin password to continue
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full"
                  />
                </div>
                <Button className="w-full" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            <ProjectPageContent/>
          )}
        </div>
      </div>
    </main>
  );
};

export default ClientProjectPage;
