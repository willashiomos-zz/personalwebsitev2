import React from "react"
import Fade from 'react-reveal/Fade';
import { Helmet } from "react-helmet"


import '../styles/styles.scss'

import MainText from "../components/maintext/maintext"
import NavBar from "../components/navbar/navbar"
import MobileNavBar from "../components/navbar/mobile-navbar"
import ExpText from "../components/exp/exp"
import SkillsText from "../components/skills/skills"
import Contact from "../components/contact/contact"

const IndexPage = () => (
  <div>
    <Helmet><title>Willa Shiomos</title></Helmet>
    <NavBar/>
    <MobileNavBar/>
    <div class="container-fluid">
      <Fade bottom>
        <MainText/>
      </Fade>
      <Fade bottom>
        <ExpText/>
      </Fade>
      <SkillsText/>
      <Fade bottom>
        <Contact/>
      </Fade>
    </div>
  </div>
)

export default IndexPage;
