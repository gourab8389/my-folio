"use client"

import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

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
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useRouter } from 'next/navigation';

interface Skill {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function ClientSkillPage() {
  const router = useRouter();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [updateForm, setUpdateForm] = useState({
    title: '',
    imageUrl: '',
  });

  const fetchSkills = async () => {
    try {
      const response = await fetch('/api/skills');
      const data = await response.json();
      setSkills(data.skills);
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast.error('Failed to fetch skills');
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/skills/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        toast.success('Skill deleted successfully');
        setSkills((prevSkills) => prevSkills.filter((skill) => skill._id !== id));
      } else {
        throw new Error('Failed to delete skill');
      }
    } catch (error) {
      console.error('Error deleting skill:', error);
      toast.error('Failed to delete skill');
    }
  };
  
  const handleUpdate = async (id: string) => {
    try {
      const response = await fetch(`/api/skills/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateForm),
      });
  
      if (response.ok) {
        toast.success('Skill updated successfully');
        setSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill._id === id ? { ...skill, ...updateForm } : skill
          )
        );
        setSelectedSkill(null);
      } else {
        throw new Error('Failed to update skill');
      }
    } catch (error) {
      console.error('Error updating skill:', error);
      toast.error('Failed to update skill');
    }
  };
  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill._id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="relative w-full h-48">
                <Image
                  src={skill.imageUrl}
                  alt={skill.title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      setSelectedSkill(skill);
                      setUpdateForm({
                        title: skill.title,
                        imageUrl: skill.imageUrl,
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
                          setUpdateForm({ ...updateForm, title: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">Image URL</Label>
                      <Input
                        id="imageUrl"
                        value={updateForm.imageUrl}
                        onChange={(e) =>
                          setUpdateForm({ ...updateForm, imageUrl: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => selectedSkill && handleUpdate(selectedSkill._id)}
                    >
                      Save Changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Skill</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete this skill? This action cannot be
                      undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(skill._id)}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}