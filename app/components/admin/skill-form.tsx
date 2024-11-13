"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { toast } from 'sonner';



function SkillsForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !imageUrl) {
        toast.error("Some fields are missing.");
        return;
    }

    try {
        const response = await fetch("/api/skills", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, imageUrl })
        });

        if (response.ok) {
            toast.success("Project Created");
            router.push("/all-projects");
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to create the project");
        }
    } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to create project");
    }
};


  return (
    <form onSubmit={handleSubmit}>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Skill Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter skill title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="imageUrl"
                type="url"
                placeholder="Enter image URL"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Save Skill</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </form>
  );
}

export default SkillsForm;