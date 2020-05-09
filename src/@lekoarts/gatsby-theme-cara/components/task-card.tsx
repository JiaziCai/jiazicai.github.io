/** @jsx jsx */
import React, { Children } from "react"
import { jsx } from "theme-ui";
import Alive from "../../../../public/images/al.png"

type TaskCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const TaskCard = ({ link, title, children, bg }: TaskCardProps) => (
    <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 3,
      py: [4, 4],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-15px)`,
        boxShadow: `xl`,
        opacity:`0.5`
      },
    }}
  >

    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`, fontSize: `1.25rem` }}>{children}</div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      <div>{title}</div>
    </div>
  </a>
)

export default TaskCard