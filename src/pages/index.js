import React from "react"

import Layout from "../components/layout"
import PostLink from "../components/post-link"
import SEO from "../components/seo"
import Contact from "../components/contact"

import icon from "../images/index_illustration_export.svg"

import "../styles/reset.scss"
import "../styles/helpers.scss"
import "../styles/index.scss"

const IndexPage = ({data: {allMarkdownRemark: { edges },},}) => {

  //todo: list all posts on index.js
  const Posts = edges
                .filter(edge => !!edge.node.frontmatter.date)
                .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)


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
              This website is built using <a className="intro-links" href="https://www.gatsbyjs.org/">GatsbyJS</a>. You can view the source code <a className="intro-links" href="https://github.com/jj-plane/website">here.</a>&nbsp;The illustrations are altered versions of <a href="https://undraw.co/" className="intro-links">Undraw</a>
            </p>
            <img src={icon} height="250" alt="Illustration of me at my desk coding"></img>
          </section>
        </div>
        <div className="container post-container">
          <h2 className="post-container-header">Posts</h2>
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

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 6) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`