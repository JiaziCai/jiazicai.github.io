/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Alive from "../../../../public/images/al.png"
import TaskCard from "./task-card";
import TaskMDX from "../sections/tasks";
import { Children } from "react"
import React, {useState, useEffect, useRef} from 'react'
import "../../../styles/global.css"
import SingleTask from "./single-task"

const Tasks = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial');

    const frontEl = useRef();
    const backEl = useRef();
    const dataPlaylists = [
        {
            id: 101,
            category_id: 1,
            name: 'ALIVE',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970799/al_h7qvru.png",
            info:"Developing E-learning platform for New York University with MERN stack",
            answer: "MongoDB, Express, React/Redux, Node, GraphQL",
            website:"alive.xprss.org",
            github: "",
        },
        {
            id: 102,
            category_id: 1,
            name: 'Fruit Chat',
            image: 'https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970796/fc_ehff3b.png',
            info: "MERN stack project for chat web application",
            answer: "React, Redux, NodeJS, Express, Material UI, Firebase, REST API",
            website:"jiazicai.github.io/FruitChat/",
            github: "github.com/JiaziCai/FruitChat ",
        },
        {
            id: 103,
            category_id: 2,
            name: 'To Do List',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970802/tdl_jfukq6.png",
            info: "Add/delete task, categorize task, light/dark mode, accessibility, quick add task",
            answer: "React, Firebase, React Testing Library, SCSS",
            website:"jiazicai.github.io/todolist/",
            github: "github.com/JiaziCai/todolist",
        },
        {
            id: 104,
            category_id: 1,
            name: 'Pixaland',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970804/pl_ughfk1.png",
            info: "Upload photo, search photo, add photographer, search photographer",
            answer: "Node, MongoDB, EJS, Heroku",
            website:"pixaland.herokuapp.com",
            github: "github.com/JiaziCai/pixaland",
        },
        {
            id: 105,
            category_id: 2,
            name: 'Shop Ramen',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970802/sr_ousygu.png",
            info: "Dynamic and responsive shopping website",
            answer: "React, Netlify, Bootstrap, Styled-Component",
            website:"jiazicai.github.io/Shop-Ramen/",
            github: "github.com/JiaziCai/Shop-Ramen/",
        },
        {
            id: 106,
            category_id: 3,
            name: 'COVID Tracker',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970798/cv_hrd5w9.png",
            info: "Used REST API to fetch data and Chart.js to display COVID-19 data",
            answer: "React, REST API, CSS Modules, Chart.js",
            website:"jiazicai.github.io/covid-tracker",
            github: "github.com/JiaziCai/covid-tracker",
        },
        {
            id: 107,
            category_id: 3,
            name: 'Quiz Generator',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970800/qg_utwd63.png",
            info: "Used REST API to generate quiz by category and number",
            answer: "React, REST API, CSS Grid",
            website:"jiazicai.github.io/quiz-generator",
            github: "github.com/JiaziCai/quiz-generator",
        },
        {
            id: 108,
            category_id: 1,
            name: 'Spotify Redesign',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1588970801/sd_fknxsx.png",
            info: "Cloned Spotify's design",
            answer: "React, Redux, CSS, SASS",
            website:"jiazicai.github.io/spotify-ui",
            github: "github.com/JiaziCai/spotify-ui",
        },
        {
            id: 109,
            category_id: 1,
            name: 'Miniflix',
            image: "https://res.cloudinary.com/firebeat/image/upload/q_auto/v1589147185/miniflix_nqaiuy.jpg",
            info: "Isomorphic and responsive design web pages of Netflix",
            answer: "React, CSS Grid, Styled-Component",
            website:"jiazicai.github.io/Miniflix",
            github: "github.com/JiaziCai/Miniflix",
        },
    ]
    return (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
        className="innerGrid"
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`repeat(auto-fit, minmax(320px, 1fr))`],
            h2: { gridColumn: `-1/1`},
            justifyContent:`center`
          }}
        >
            <TaskMDX />
            {dataPlaylists.map((playlist, id) => (
            <TaskCard bg="linear-gradient(to right, #0d7be3 0%, #4335a4 100%)" playlist={playlist} key={playlist.id} id={playlist.id}>
                <SingleTask playlist={playlist} key={playlist.id} />
            </TaskCard>
        ))}
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_red" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="arrowDown" hiddenMobile width={48} color="icon_blue" left="70%" top="150%" />
        <SVG icon="arrowDown" hiddenMobile width={48} color="icon_blue" left="70%" top="155%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="175%" />
        <SVG icon="box" hiddenMobile width={8} color="icon_green" left="45%" top="150%" />
        <SVG icon="circle" hiddenMobile width={32} color="icon_purple" left="5%" top="135%" />
        <SVG icon="circle" hiddenMobile width={8} color="icon_darkest" left="55%" top="165%" />
        <SVG icon="hexa" hiddenMobile width={32} color="icon_red" left="75%" top="120%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="box" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
        <SVG icon="arrowDown" hiddenMobile width={32} color="icon_blue" left="75%" top="95%" />
        <SVG icon="arrowDown" hiddenMobile width={32} color="icon_blue" left="75%" top="98%" />
        <SVG icon="upDown" hiddenMobile width={32} color="icon_pink" left="45%" top="98%" />
        
        <SVG icon="triangle" hiddenMobile width={12} stroke color="icon_brightest" left="90%" top="180%" />
        <SVG icon="upDown" width={16} stroke color="icon_darkest" left="30%" top="145%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="10%" top="190%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="177%" />
        <SVG icon="cross" width={75} stroke color="icon_pink" left="10%" top="105%" />
        <SVG icon="triangle" hiddenMobile stroke width={12} stroke color="icon_brightest" left="90%" top="200%" />
        <SVG icon="hexa" width={16} stroke color="icon_darkest" left="30%" top="125%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="10%" top="130%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="147%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke color="icon_yellow" left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_green" left="80%" top="70%" />
      <SVG icon="hexa" width={8} stroke color="icon_red" left="60%" top="80%" />
    </Divider>
  </div>
)
        }

export default Tasks

