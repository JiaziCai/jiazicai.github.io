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

const Tasks = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 1,
            name: 'Home playlist 1',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970799/al_h7qvru.png",
        },
        {
            id: 102,
            category_id: 1,
            name: 'Home playlist 2',
            image: 'https://res.cloudinary.com/firebeat/image/upload/v1588970796/fc_ehff3b.png'
        },
        {
            id: 103,
            category_id: 2,
            name: 'Home playlist 3',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970802/tdl_jfukq6.png"
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970804/pl_ughfk1.png"
        },
        {
            id: 105,
            category_id: 2,
            name: 'Sunday playlist',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970802/sr_ousygu.png"
        },
        {
            id: 106,
            category_id: 3,
            name: 'Mood playlist 1',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970798/cv_hrd5w9.png"
        },
        {
            id: 107,
            category_id: 3,
            name: 'Mood playlist 2',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970800/qg_utwd63.png"
        },
        {
            id: 108,
            category_id: 1,
            name: 'Home playlist 1',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970801/sd_fknxsx.png"
        },
        {
            id: 109,
            category_id: 1,
            name: 'Home playlist 1',
            image: "https://res.cloudinary.com/firebeat/image/upload/v1588970806/mf_wuqqle.png"
        },
        {
            id: 110,
            category_id: 1,
            name: 'Home playlist 1',
            image:"https://res.cloudinary.com/firebeat/image/upload/v1588970804/fb_slggsy.png"
        },
        {
            id: 111,
            category_id: 1,
            name: 'Home playlist 1',
            image:"https://res.cloudinary.com/firebeat/image/upload/v1588970804/fb_slggsy.png"
        },
        {
            id: 112,
            category_id: 1,
            name: 'Home playlist 1',
            image:"https://res.cloudinary.com/firebeat/image/upload/v1588970804/fb_slggsy.png"
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
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`repeat(auto-fit, minmax(320px, 1fr))`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
            <TaskMDX />
            {dataPlaylists.map((playlist, id) => (
            <TaskCard bg="linear-gradient(to right, #0d7be3 0%, #4335a4 100%)">
            <div className="card" key={id}>
                    <div className="cardImage" style={{ justifyContent: "center",
    display: "flex"}}>
                        <img src={playlist.image} height="163.8" width="287.4" alt="Pic 1"/>
                    </div>
                    <div className="cardContent">
                        <h3>{playlist.name}</h3>
                        <span>Minimalism, electronica and modern...</span>
                    </div>
                </div> 
            </TaskCard>
        ))}
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)
        }

export default Tasks

