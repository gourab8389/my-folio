

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProjectForm from "./ProjectForm"
import SkillsForm from "./skill-form"

export function Form() {
  return (
    <Tabs defaultValue="projects" className="w-[400px]">

      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>


      <ProjectForm/>
      <SkillsForm/>

    </Tabs>
  )
}
