/** @jsx jsx */
import React, {useState, useEffect, useRef, Children} from 'react'
import { jsx } from "theme-ui";
import "../../../styles/global.css"

type TaskCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}


const TaskCard = ({ link, title, children, bg }: TaskCardProps) => {
  return (
    <div
    className="wholeCard"
    sx={{
      width: `100%`,
      height: `400px`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-15px)`,
        boxShadow: `xl`,
      },
    }}
  >

    <div sx={{ textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`, fontSize: `1.25rem` }}>{children}</div>
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
  </div>
)
    }

export default TaskCard