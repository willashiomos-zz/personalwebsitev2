import React from "react"


import '../styles/styles.scss'

import MainText from "../components/maintext/maintext"
import NavBar from "../components/navbar/navbar"
import ExpText from "../components/exp/exp"
import SkillsText from "../components/skills/skills"
import Contact from "../components/contact/contact"

const IndexPage = () => (
  <div>
    <NavBar/>
    <MainText/>
    <ExpText/>
    <SkillsText/>
    <Contact/>
  </div>
)

export default IndexPage;
