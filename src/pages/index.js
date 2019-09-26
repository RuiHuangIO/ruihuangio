import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
      <p>
        Need a to reach me? <Link to="/contact">Click here</Link>
      </p>
    </Layout>
  )
}

export default indexPage
