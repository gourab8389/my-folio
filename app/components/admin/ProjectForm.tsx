"use client"
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'


function ProjectForm() {
    const handleSubmit = async ()=>{
        console.log("projects submitted")
    }
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
              <Input id="title" type='text' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Input id="description" type='text' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="link">Project Link</Label>
              <Input id="link" type='text' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="image">Image Url</Label>
              <Input id="image" type='text'/>
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit'>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </form>
  )
}

export default ProjectForm
