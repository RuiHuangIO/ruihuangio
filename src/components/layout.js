import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"
import layoutStyles from "./layout.module.scss"
import { rhythm, scale } from "../utils/typography"

const layout = props => {
  return (
    <div
      className={layoutStyles.container}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(24),
        padding: `2.625rem ${rhythm(3 / 4)}`,
      }}
    >
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default layout
