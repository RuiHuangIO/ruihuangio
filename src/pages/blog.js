import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

const blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            description {
              description
            }
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post} key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
              </h2>
              <p>{edge.node.publishDate}</p>
              <p>{edge.node.description.description}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default blog
