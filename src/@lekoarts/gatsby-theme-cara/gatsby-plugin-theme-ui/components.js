import React from "react"
import ProjectCard from "../components/project-card"
import TaskCard from "../components/task-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, img }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
      <img src={img} alt=""/>
    </ProjectCard>
  ),
  TaskCard: ({ link, title, bg, children }) => (
    <TaskCard link={link} title={title} bg={bg}>
      {title}
    </TaskCard>
  ),
}

export default components
