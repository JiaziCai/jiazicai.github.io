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
    <Parallax pages={11}>
      <Hero offset={0} factor={1} />
      <Tasks offset={2.1} factor={3} />
      <Projects offset={5.3} factor={2} />
      <About offset={8.3} factor={2} />
      <Contact offset={10} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
