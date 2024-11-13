"use client"
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

function ProjectForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [gitLink, setGitlink] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !description || !link || !gitLink || !imageUrl) {
            toast.error("Some fields are missing.");
            return;
        }

        try {
            const response = await fetch("/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description, link, gitLink, imageUrl })
            });

            if (response.ok) {
                toast.success("Project Created");
                router.push("/admin/projects");
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
            <TabsContent value="projects">
                <Card>
                    <CardHeader>
                        <CardTitle>Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="title">Project Title</Label>
                            <Input
                                id="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                placeholder='Project Title'
                                type='text'
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                placeholder='Description'
                                type='text'
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="link">Project Link</Label>
                            <Input
                                id="link"
                                onChange={(e) => setLink(e.target.value)}
                                value={link}
                                placeholder='Project Link'
                                type='text'
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="githublink">Github Link</Label>
                            <Input
                                id="githublink"
                                onChange={(e) => setGitlink(e.target.value)}
                                value={gitLink}
                                placeholder='Github Link'
                                type='text'
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="imageUrl">Image Url</Label>
                            <Input
                                id="imageUrl"
                                onChange={(e) => setImageUrl(e.target.value)}
                                value={imageUrl}
                                placeholder='Image url'
                                type='text'
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type='submit'>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </form>
    );
}

export default ProjectForm;
