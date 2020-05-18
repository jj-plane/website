import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/post.scss"

export default function Post({
    data
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return(
      <Layout>
        <SEO title={`${frontmatter.title} | ${frontmatter.date}`}></SEO>
        <main className="post-main">
          <h1 className="post-title">{frontmatter.title}</h1>
          <h2 className="post-date">{frontmatter.date} | {frontmatter.readtime} minute(s)</h2>
          <div dangerouslySetInnerHTML={{__html: html}}></div>
        </main>
      </Layout>
    )
}

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug } }){
      html
      frontmatter{
        date(formatString: "MMMM DD, YYYY")
        title
        readtime
      }
    }
  }
`