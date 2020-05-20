/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import SVG from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import Alive from "../../../../public/images/al.png";
import TaskCard from "./task-card";
import TaskMDX from "../sections/task.mdx";
import { Children } from "react";
import React, { useState, useEffect, useRef } from "react";
import "../../../styles/global.css";
import SingleTask from "./single-task";

const Tasks = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {
  const [card, setCard] = useState("All");

  const dataPlaylists = [
    {
      id: 101,
      category_id: 1,
      tech: ["All", "React", "redux", "MongoDB", "Node", "GraphQL"],
      name: "ALIVE",
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225659/newAlive_bbl5sv.jpg",
      info:
        "Developing E-learning platform for New York University with MERN stack",
      answer: "MongoDB, Express, React/Redux, Node, GraphQL",
      website: "alive.xprss.org",
      github: ""
    },
    {
      id: 102,
      category_id: 1,
      name: "Fruit Chat",
      tech: [
        "All",
        "React",
        "Redux",
        "Node",
        "Express",
        "UI/UX",
        "Firebase",
        "REST API"
      ],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225658/fc_o3qjah.jpg",
      info: "MERN stack project for chat web application",
      answer: "React, Redux, NodeJS, Express, Material UI, Firebase, REST API",
      website: "jiazicai.github.io/FruitChat/",
      github: "github.com/JiaziCai/FruitChat "
    },
    {
      id: 105,
      category_id: 2,
      name: "Shop Ramen",
      tech: ["All", "React", "Netlify", "UI/UX"],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225659/sr_xzuzm9.jpg",
      info: "Dynamic and responsive shopping website",
      answer:
        "React, Redux, Gatsby, Netlify, Bootstrap, Contentful, Styled-Component",
      website: "shop-ramen.netlify.app/",
      github: "github.com/JiaziCai/Shop-Ramen/"
    },
    {
      id: 103,
      category_id: 2,
      name: "To Do List",
      tech: ["All", "React", "Firebase", "SCSS"],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225659/tdl_wdpfav.jpg",
      info:
        "Add/delete task, categorize task, light/dark mode, accessibility, quick add task",
      answer: "React, Firebase, React Testing Library, SCSS",
      website: "jiazicai.github.io/todolist/",
      github: "github.com/JiaziCai/todolist"
    },
    {
      id: 104,
      category_id: 1,
      name: "Pixaland",
      tech: ["All", "React", "Node", "MongoDB", "Heroku"],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225659/pl_ty5o0w.jpg",
      info: "Upload photo, search photo, add photographer, search photographer",
      answer: "Node, MongoDB, EJS, Heroku",
      website: "pixaland.herokuapp.com",
      github: "github.com/JiaziCai/pixaland"
    },
    {
      id: 106,
      category_id: 3,
      name: "COVID Tracker",
      tech: ["All", "REST API", "React", "Data Vis"],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225658/newCovid-19_qmqf3c.jpg",
      info: "Used REST API to fetch data and Chart.js to display COVID-19 data",
      answer: "React, REST API, CSS Modules, Chart.js",
      website: "jiazicai.github.io/covid-tracker",
      github: "github.com/JiaziCai/covid-tracker"
    },
    {
      id: 107,
      category_id: 3,
      name: "Quiz Generator",
      tech: ["All", "REST API", "React", "UI/UX"],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225659/qg_m4rx6w.jpg",
      info: "Used REST API to generate quiz by category and number",
      answer: "React, REST API, CSS Grid",
      website: "jiazicai.github.io/quiz-generator",
      github: "github.com/JiaziCai/quiz-generator"
    },
    {
      id: 108,
      category_id: 1,
      name: "Spotify Redesign",
      tech: ["All", "React", "Redux", "UI/UX"],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225659/sd_gdblly.jpg",
      info: "Cloned Spotify's design",
      answer: "React, Redux, CSS, SASS",
      website: "jiazicai.github.io/spotify-ui",
      github: "github.com/JiaziCai/spotify-ui"
    },
    {
      id: 109,
      category_id: 1,
      name: "Miniflix",
      tech: ["All", "React", "UI/UX"],
      image:
        "https://res.cloudinary.com/firebeat/image/upload/v1589225659/newMiniflix_lnt15r.jpg",
      info: "Isomorphic and responsive design web pages of Netflix",
      answer: "React, CSS Grid, Styled-Component",
      website: "jiazicai.github.io/Miniflix",
      github: "github.com/JiaziCai/Miniflix"
    }
  ];

  const cardOptions = [
    {
      id: 191,
      name: "All"
    },
    {
      id: 192,
      name: "React"
    },
    {
      id: 193,
      name: "Node"
    },
    {
      id: 194,
      name: "REST API"
    },
    {
      id: 195,
      name: "MongoDB"
    },
    {
      id: 196,
      name: "UI/UX"
    }
  ];
  return (
    <div>
      <Divider
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={-0.2}
        offset={1.1}
        factor={factor}
      />
      <Content speed={0.4} offset={offset + 0.2} factor={factor}>
        <Inner>
          <div
            className='innerGrid'
            sx={{
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`repeat(auto-fit, minmax(320px, 1fr))`],
              h2: { gridColumn: `-1/1` },
              justifyContent: `center`,
              p: { gridColumn: `-1/1`, display: `inline-flex`, margin: `1rem` },
              button: { color: `heading` },
              h3: { color: `heading` },
              span: { color: `heading` }
            }}
          >
            <TaskMDX />
            <div>
              {cardOptions.map(({ id, name }) => (
                <p key={id}>
                  <button
                    className={card == name ? "cardButtonActive" : "cardButton"}
                    onClick={e => setCard(name)}
                  >
                    {name}
                  </button>
                </p>
              ))}
            </div>
            {dataPlaylists
              .filter(name => name.tech.includes(card))
              .map((playlist, id) => (
                <TaskCard
                  playlist={playlist}
                  key={playlist.id}
                  id={playlist.id}
                >
                  <SingleTask playlist={playlist} key={playlist.id} />
                </TaskCard>
              ))}
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG
            icon='box'
            width={6}
            color='icon_brightest'
            left='85%'
            top='75%'
          />
          <SVG icon='upDown' width={8} color='icon_teal' left='70%' top='20%' />
          <SVG
            icon='triangle'
            width={8}
            stroke
            color='icon_red'
            left='25%'
            top='5%'
          />
          <SVG
            icon='circle'
            hiddenMobile
            width={24}
            color='icon_brightest'
            left='17%'
            top='60%'
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon='triangle'
            width={12}
            stroke
            color='icon_brightest'
            left='90%'
            top='30%'
          />
          <SVG
            icon='arrowDown'
            hiddenMobile
            width={48}
            color='icon_blue'
            left='70%'
            top='150%'
          />
          <SVG
            icon='arrowDown'
            hiddenMobile
            width={48}
            color='icon_blue'
            left='70%'
            top='155%'
          />
          <SVG
            icon='triangle'
            hiddenMobile
            width={16}
            stroke
            color='icon_teal'
            left='18%'
            top='175%'
          />
          <SVG
            icon='box'
            hiddenMobile
            width={8}
            color='icon_green'
            left='45%'
            top='150%'
          />
          <SVG
            icon='circle'
            hiddenMobile
            width={32}
            color='icon_purple'
            left='5%'
            top='135%'
          />
          <SVG
            icon='circle'
            hiddenMobile
            width={8}
            color='icon_darkest'
            left='55%'
            top='165%'
          />
          <SVG
            icon='hexa'
            hiddenMobile
            width={32}
            color='icon_red'
            left='75%'
            top='120%'
          />
          <SVG
            icon='circle'
            width={6}
            color='icon_brightest'
            left='75%'
            top='10%'
          />
          <SVG
            icon='box'
            hiddenMobile
            width={8}
            color='icon_green'
            left='45%'
            top='10%'
          />
          <SVG
            icon='arrowDown'
            hiddenMobile
            width={32}
            color='icon_blue'
            left='75%'
            top='95%'
          />
          <SVG
            icon='arrowDown'
            hiddenMobile
            width={32}
            color='icon_blue'
            left='75%'
            top='98%'
          />

          <SVG
            icon='triangle'
            hiddenMobile
            width={12}
            stroke
            color='icon_brightest'
            left='90%'
            top='180%'
          />
          <SVG
            icon='upDown'
            width={16}
            stroke
            color='icon_darkest'
            left='30%'
            top='145%'
          />
          <SVG
            icon='circle'
            width={6}
            color='icon_darkest'
            left='75%'
            top='177%'
          />
          <SVG
            icon='cross'
            width={75}
            stroke
            color='icon_pink'
            left='10%'
            top='105%'
          />
          <SVG
            icon='triangle'
            hiddenMobile
            stroke
            width={12}
            stroke
            color='icon_brightest'
            left='90%'
            top='200%'
          />
          <SVG
            icon='hexa'
            width={16}
            stroke
            color='icon_darkest'
            left='30%'
            top='125%'
          />
          {/* <SVG icon="cross" width={16} stroke color="icon_pink" left="10%" top="130%" /> */}
          <SVG
            icon='circle'
            width={6}
            color='icon_darkest'
            left='75%'
            top='147%'
          />
        </UpDownWide>
        <SVG
          icon='circle'
          hiddenMobile
          width={6}
          color='icon_brightest'
          left='4%'
          top='20%'
        />
        <SVG icon='circle' width={12} color='icon_pink' left='80%' top='60%' />
        <SVG icon='box' width={6} color='icon_orange' left='10%' top='10%' />
        <SVG icon='box' width={12} color='icon_yellow' left='29%' top='26%' />
        <SVG
          icon='hexa'
          width={16}
          stroke
          color='icon_yellow'
          left='75%'
          top='30%'
        />
        <SVG
          icon='hexa'
          width={8}
          stroke
          color='icon_green'
          left='80%'
          top='70%'
        />
        <SVG
          icon='hexa'
          width={8}
          stroke
          color='icon_red'
          left='60%'
          top='80%'
        />
      </Divider>
    </div>
  );
};

export default Tasks;
