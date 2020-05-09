import React from "react"
import TaskCard from "../components/task-card"

const components = {
  // eslint-disable-next-line react/display-name
  TaskCard: ({ link, title, bg, children }) => (
    <TaskCard link={link} title={title} bg={bg}>
      {title}
    </TaskCard>
  ),
}

export default components
