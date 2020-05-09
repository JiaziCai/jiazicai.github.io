import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Tasks from "../components/tasks"

const Cara = () => (
  <Layout>
    <Parallax pages={7}>
      <Hero offset={0} factor={1} />
      <Tasks offset={1} factor={2} />
      <About offset={4.9} factor={1} />
      <Contact offset={6} factor={0} />
    </Parallax>
  </Layout>
)

export default Cara
