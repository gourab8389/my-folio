"use client"

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import PageLoader from "@/app/components/loader";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { Button } from "@/components/ui/button";
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
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "@/components/label";
import { Input } from "@/components/input";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  gitLink: string;
  link: string;
}

const ProjectPageContent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [updateForm, setUpdateForm] = useState({
    title: "",
    imageUrl: "",
    description: "",
    gitLink: "",
    link: "",
  });

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data.projects);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Project deleted successfully");
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== id)
        );
      } else {
        throw new Error("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateForm),
      });

      if (response.ok) {
        toast.success("Project updated successfully");
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project._id === id ? { ...project, ...updateForm } : project
          )
        );
        setSelectedProject(null);
      } else {
        throw new Error("Failed to update project");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project");
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
        <div id="projects" className="px-6 md:px-12 lg:px-24 py-12 pt-24">
          <h1 className="text-3xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-neutral-400 dark:to-slate-600 mb-8">
            All of My Projects
          </h1>

          {isLoading ? (
            <PageLoader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((item) => (
                <CardContainer
                  key={item._id}
                  className="inter-var"
                  containerClassName="p-4"
                >
                  <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border border-gray-300">
                    <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
                      {item.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      className="text-neutral-500 text-xs mt-2 dark:text-neutral-300"
                    >
                      {item.description}
                    </CardItem>
                    <CardItem className="w-full mt-3">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg"
                        priority
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                      <CardItem
                        as={Link}
                        href={item.gitLink}
                        target="__blank"
                        className="text-xs font-normal dark:text-white"
                      >
                        Github →
                      </CardItem>
                      <CardItem
                        as={Link}
                        href={item.link}
                        className="text-xs font-bold dark:text-black"
                      >
                        Live Site
                      </CardItem>
                    </div>
                    {/* Action buttons */}
                    <div className="flex mt-4 justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                        className="border-none"
                          variant="outline"
                          size="xs"
                          onClick={() => {
                            setSelectedProject(item);
                            setUpdateForm({
                              title: item.title,
                              imageUrl: item.imageUrl,
                              description: item.description,
                              gitLink: item.gitLink,
                              link: item.link,
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
                        <div className="space-y-2">
                          <div className="space-y-1">
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
                                <Label htmlFor="description">Description</Label>
                                <Input
                                id="description"
                                value={updateForm.description}
                                onChange={(e) =>
                                    setUpdateForm({
                                    ...updateForm,
                                    description: e.target.value,
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
                            <div className="space-y-2">
                                <Label htmlFor="link">Project Link</Label>
                                <Input
                                id="link"
                                value={updateForm.link}
                                onChange={(e) =>
                                    setUpdateForm({
                                    ...updateForm,
                                    link: e.target.value,
                                    })
                                }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="githublink">Github Link</Label>
                                <Input
                                id="githublink"
                                value={updateForm.gitLink}
                                onChange={(e) =>
                                    setUpdateForm({
                                    ...updateForm,
                                    gitLink: e.target.value,
                                    })
                                }
                                />
                            </div>        
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={() =>
                              selectedProject && handleUpdate(selectedProject._id)
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
                          <AlertDialogTitle>Delete Project</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this Project? This
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
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectPageContent;

