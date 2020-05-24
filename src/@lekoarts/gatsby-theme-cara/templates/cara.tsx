import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Tasks from "../components/tasks";

const Cara = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth > 1024;
  const isBigScreen =
    typeof window !== "undefined" && window.innerWidth >= 1568;
  const showTask = isBigScreen ? 1 : 1;
  const showAbout = isMobile ? (isBigScreen ? 2.3 : 3.3) : 4;
  const heroFactor = isBigScreen ? 1 : 1;
  const taskFactor = isBigScreen ? 1 : 2;
  const aboutFactor = isBigScreen ? 0.5 : 1;
  const showContact = isMobile ? (isBigScreen ? 2.9 : 4) : 5.5;
  const showPage = isMobile ? (isBigScreen ? 3.17 : 5.04) : 6.5;
  const contactFactor = isBigScreen ? 0.3 : 1;
  return (
    <Layout>
      <Parallax pages={showPage}>
        <a name='head'></a>
        <Hero offset={0} factor={heroFactor} />
        <Tasks offset={showTask} factor={taskFactor} />
        <About offset={showAbout} factor={aboutFactor} />
        <Contact offset={showContact} factor={contactFactor} />
      </Parallax>
    </Layout>
  );
};

export default Cara;
