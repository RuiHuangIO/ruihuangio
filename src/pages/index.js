import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <section>
        <div class="intro">Hello, I'm Rui Huang!</div>
        <div class="tagline">Your friendly neighborhood developer</div>
      </section>
    </Layout>
  )
}

export default indexPage
