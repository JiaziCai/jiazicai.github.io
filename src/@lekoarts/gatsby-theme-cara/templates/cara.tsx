import React, { Component } from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Tasks from "../components/tasks";

interface MyState {
  hideNav: number;
}
interface MyProps {
  hideNav: number;
}

class Cara extends Component<MyProps, MyState> {
  constructor(MyProps) {
    super(MyProps);
    this.state = { hideNav: null };
  }
  resize() {
    let currentHideNav = window.innerWidth;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  render() {
    const isMobile = this.state.hideNav > 1200;
    const isTablet = this.state.hideNav < 748;
    const isSmall = this.state.hideNav < 404;
    const isBigScreen = this.state.hideNav >= 1568;
    const showTask = isBigScreen ? 1 : 1;
    const showAbout = isSmall
      ? 4.1
      : isTablet
      ? 4.6
      : isMobile
      ? isBigScreen
        ? 2.7
        : 3.3
      : 4;
    const heroFactor = isBigScreen ? 1 : 1;
    const taskFactor = isBigScreen ? 1 : 2;
    const aboutFactor = isBigScreen ? 0.5 : 1;
    const showContact = isMobile ? (isBigScreen ? 3.2 : 4) : 5.5;
    const showPage = isMobile ? (isBigScreen ? 4 : 5.04) : 6.5;
    const contactFactor = isBigScreen ? 0.75 : 1;
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
  }
}

export default Cara;
