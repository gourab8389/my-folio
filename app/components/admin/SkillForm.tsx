"use client"
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'

function SkillForm() {
    const handleSubmit = async () => {
        console.log("skills submitted")
    }


  return (
    <form onSubmit={handleSubmit}>
        <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input id="title" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Input id="description" type="text" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit'>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </form>
  )
}

export default SkillForm
