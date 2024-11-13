"use client"
import { useState } from 'react';

import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";


interface SkillFormData {
  title: string;
  image: string;
}

function SkillsForm() {
  const [formData, setFormData] = useState<SkillFormData>({
    title: '',
    image: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Skill Data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
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
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                type="url"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleChange}
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