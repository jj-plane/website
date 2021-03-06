import React from "react"

import Layout from "../components/layout"
import PostLink from "../components/post-link"
import SEO from "../components/seo"
import Contact from "../components/contact"

import { graphql } from "gatsby"


import "../styles/reset.scss"
import "../styles/helpers.scss"
import "../styles/index.scss"

const IndexPage = ({data: {allMarkdownRemark: {edges}}}) => {
  const Posts = edges.filter(edge => !!edge.node.frontmatter.date).map(edge => <PostLink key={edge.node.id} post={edge.node}></PostLink>)
  return(
    <Layout>
      <SEO title="Home" />
      <main>        
        <div className="container header-container">
          <section className="header-section">
            <p className="intro">
              <span className="intro-emphasis">
                Hi, I'm Joshua 
              </span>
              &nbsp; and this is my website. I'll use this space to talk about javascript, video games, and books that I'm reading. 
              This website is built using <a className="intro-links" href="https://www.gatsbyjs.org/">GatsbyJS</a>. You can view the source code <a className="intro-links" href="https://github.com/jj-plane/website">here.</a>&nbsp;The illustrations are altered versions of <a href="https://undraw.co/" className="intro-links">Undraw</a>.
            </p>
          </section>
        </div>
        <div className="container post-container">
          <section id="post-repeater">
            {Posts}
          </section>
        </div>
        <Contact></Contact>
      </main>
    </Layout>
  )
}

export default IndexPage

export const PageQuery = graphql`
  query getHomepageData{
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }  
  }
`