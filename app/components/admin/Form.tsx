

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProjectForm from "./ProjectForm"
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
