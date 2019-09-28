import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div class="social-container">
          <h3 class="social-title">FOLLOW US</h3>
          <a class="social-item github" href="https://github.com/RuiHuangIO">
            <i class="fab fa-github social-icon"></i>
          </a>
          <a
            class="social-item twitter"
            href="https://twitter.com/HRisforHuangRui"
          >
            <i class="fab fa-twitter social-icon"></i>
          </a>
          <a
            class="social-item linkedin"
            href="https://www.linkedin.com/in/ruihuangio"
          >
            <i class="fab fa-linkedin social-icon"></i>
          </a>
          <a class="social-item codepen" href="https://codepen.io/RuiHuangIO">
            <i class="fab fa-codepen social-icon"></i>
          </a>
        </div>
    </Layout>
  )
}

export default contact
