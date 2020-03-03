/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({actions, graphql, reporter}) =>{
    const { createPage } = actions
    const postTemplate = path.resolve('src/templates/post.js')
    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  //handle errors
  if(result.errors){
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) =>{
      createPage({
          path: node.frontmatter.path,
          component: postTemplate,
          context: {},
      })
  })
}
