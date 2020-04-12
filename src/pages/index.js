import React from "react"


import '../styles/styles.scss'

import MainText from "../components/maintext/maintext"
import NavBar from "../components/navbar/navbar"
import ExpText from "../components/exp/exp"

const IndexPage = () => (
  <div>
    <NavBar/>
    <MainText/>
    <ExpText/>
  </div>
)

export default IndexPage;
