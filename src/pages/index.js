import React from "react"

import Layout from "../components/layout"
import PostLink from "../components/post-link"

import "../styles/reset.scss"
import "../styles/helpers.scss"
import "../styles/index.scss"

//import Trianglify from "trianglify"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  //todo: list all posts on index.js
  const Posts = edges
                .filter(edge => !!edge.node.frontmatter.date)
                .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)


  return(
    <Layout>
      <main>        
        <div className="container header-container">
          <section className="header-section">
            <p className="intro">
              <span className="intro-emphasis">
                Hi, I'm Joshua 
              </span>
              &nbsp; and this is my website. I'll use this space to talk about javascript, video games, and books that I'm reading. 
            </p>
            <p className="intro mt-3">
              This website is built using <a className="intro-links" href="https://www.gatsbyjs.org/">GatsbyJS</a>. You can view the source code <a className="intro-links" href="#">here.</a>
            </p>
          </section>
        </div>
        <div className="container">
          <section id="post-container">
            {Posts}
          </section>
        </div>
      </main>
    </Layout>
  )
}

//Trianglify stuff

/*
const header_section = document.querySelector('.header-container');
console.log(header_section);

function addBackground(target){
  const dimensions = target.getClientRects()[0];
  const pattern = Trianglify({
    width: dimensions.width,
    height: dimensions.height,
    x_colors: ['#FFFFFF', '#8C1616'],
    cell_size: Math.random()*200 + 40,
  });

  //Confirmed that this isn't going to work
  target.style['background-image'] = 'url(' + pattern.png() + ')';
}

addBackground(header_section);

*/

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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