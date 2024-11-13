"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import Link from "next/link";
import PageLoader from "@/app/components/loader";
import SkillDataProvider from "@/components/SkillDataProvider";
import { Pencil, Trash2 } from "lucide-react";

interface Skill {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function SkillContentPage () {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updateForm, setUpdateForm] = useState({
    title: "",
    imageUrl: "",
  });

  const fetchSkills = async () => {
    try {
      const response = await fetch("/api/skills");
      const data = await response.json();
      setSkills(data.skills);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching skills:", error);
      toast.error("Failed to fetch skills");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/skills/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Skill deleted successfully");
        setSkills((prevSkills) =>
          prevSkills.filter((skill) => skill._id !== id)
        );
      } else {
        throw new Error("Failed to delete skill");
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
      toast.error("Failed to delete skill");
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const response = await fetch(`/api/skills/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateForm),
      });

      if (response.ok) {
        toast.success("Skill updated successfully");
        setSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill._id === id ? { ...skill, ...updateForm } : skill
          )
        );
        setSelectedSkill(null);
      } else {
        throw new Error("Failed to update skill");
      }
    } catch (error) {
      console.error("Error updating skill:", error);
      toast.error("Failed to update skill");
    }
  };

  return (
    <main>
      {/* Background pattern */}

      {/* Content */}
      <div className="relative z-10">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <div className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-4">
            <Link href={"/admin"}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span className="flex flex-row gap-1">Back</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>

        {/* Main content with loader */}
        <div className="px-6 md:px-12 lg:px-24 py-12 pt-24">
          <h1 className="text-3xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400 dark:to-slate-600 mb-8">
            All of My Skills
          </h1>

          {isLoading ? (
            <PageLoader />
          ) : (
            <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-4 w-full lg:w-4/5 mx-auto my-[3rem]">
              {skills.map((item, index) => (
                <div className="flex flex-col gap-4 p-4 rounded-lg justify-center items-center bg-gray-50 dark:bg-black shadow-md hover:bg-slate-100 dark:hover:bg-slate-950 border dark:border-gray-950">
                  <div key={index} className="flex gap-4">
                    <SkillDataProvider
                      key={index}
                      src={item.imageUrl}
                      width={30}
                      height={30}
                      index={index}
                      className={"rounded-full bg-white border border-white"}
                    />
                    <span className="text-xs lg:text-md font-semibold text-black dark:text-white">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                        className="border-none"
                          variant="outline"
                          size="xs"
                          onClick={() => {
                            setSelectedSkill(item);
                            setUpdateForm({
                              title: item.title,
                              imageUrl: item.imageUrl,
                            });
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Update Skill</DialogTitle>
                          <DialogDescription>
                            Make changes to the skill details below.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                              id="title"
                              value={updateForm.title}
                              onChange={(e) =>
                                setUpdateForm({
                                  ...updateForm,
                                  title: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <Input
                              id="imageUrl"
                              value={updateForm.imageUrl}
                              onChange={(e) =>
                                setUpdateForm({
                                  ...updateForm,
                                  imageUrl: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={() =>
                              selectedSkill && handleUpdate(selectedSkill._id)
                            }
                          >
                            Save Changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="border-none" variant="outline" size="xs">
                          <Trash2 className="h-4 w-4" color="red" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Skill</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this skill? This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(item._id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
