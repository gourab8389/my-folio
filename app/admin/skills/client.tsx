"use client"

import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import EnhancedPasswordInput from "@/components/password-input";
import { toast } from "sonner";
import SkillContentPage from "@/app/components/admin/admin-skill-page.tsx/skill-content";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
const AUTH_KEY = process.env.AUTH_KEY!;

const ClientSkillPage = () => {

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem(AUTH_KEY);
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      // Store authentication status in localStorage
      localStorage.setItem(AUTH_KEY, "true");
      toast.success("Successfully authenticated!");
    } else {
      setPassword("");
      // Clear authentication status on failed attempt
      localStorage.removeItem(AUTH_KEY);
      toast.error("Invalid password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    // Clear authentication status on logout
    localStorage.removeItem(AUTH_KEY);
    toast.success("Logged out successfully");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin size-5"/>
        </div>
      </div>
    );
  }
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
                  <EnhancedPasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  label="Password"
                  placeholder="Enter password"
                />
                <Button className="w-full" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            <SkillContentPage/>
          )}
        </div>
      </div>
    </main>
  );
};

export default ClientSkillPage;
