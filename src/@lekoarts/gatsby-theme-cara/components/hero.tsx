/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import HeroInner from "../elements/heroinner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
import Github from "../../../../public/social/github.png"
import Linkedin from "../../../../public/social/linkedin.png"
import { Link } from "@reach/router"


const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
  <div>
    <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mt:4 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light Mode` : `Dark Mode`}
      </button>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="20%" top="20%" />
        <SVG icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="box" hiddenMobile width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowDown" hiddenMobile width={32} color="icon_blue" left="80%" top="10%" />
        <SVG icon="arrowDown" hiddenMobile width={32} color="icon_blue" left="80%" top="20%" />
        <SVG icon="triangle" hiddenMobile width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="upDown" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="10%" top="15%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={40} color="icon_darker" left="3%" top="65%" />
      <SVG icon="circle" hiddenMobile width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="triangle" hiddenMobile width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown"  hiddenMobile width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="box" hiddenMobile width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="hexa" hiddenMobile width={16} stroke color="icon_darker" left="3%" top="49%" />
      <SVG icon="hexa" hiddenMobile width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div style={{position:"absolute", top:'100px'}}>
        <Intro />
        <a href="https://github.com/JiaziCai" target="_blank"><img src={Github} alt="github" height="50px" width="50px" style={{marginRight:'1.5em'}}/></a>
        <a href="https://www.linkedin.com/in/caijiazi/" target="_blank"><img src={Linkedin} alt="linkedin" height="50px" width="50px"/></a>
        </div>
      </Inner>
    </Content>
  </div>
  )
}

export default Hero
