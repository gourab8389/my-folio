import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProjectForm from "./ProjectForm"
import SkillForm from "./SkillForm"
import ExperienceForm from "./ExperienceForm"

export function Form() {
  return (
    <Tabs defaultValue="projects" className="w-[400px]">

      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Experience</TabsTrigger>
      </TabsList>


      <ProjectForm/>
      <ExperienceForm/>

    </Tabs>
  )
}
