import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Tasks from "../components/tasks"
import {Animated} from "react-animated-css";
 

const Cara = () => {
  const isMobile = window.innerWidth >1024;
  const showAbout = isMobile ? 3 : 4;
  const showContact = isMobile ? 4 : 5.5;
  const showPage = isMobile ?  5.04: 6.5;
  return (
  <Layout>
    <Parallax pages={showPage}>
      <Hero offset={0} factor={1} />
      <Tasks offset={1} factor={2} />
      <About offset={showAbout} factor={1} />
      <Contact offset={showContact} factor={0} />
    </Parallax>
  </Layout>
)
  }

export default Cara
