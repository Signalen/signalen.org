const path = require('path')
const { slash } = require('gatsby-core-utils')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const defaultTemplate = path.resolve('src/templates/default.js')

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 10000) {
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

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`, result.errors)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: slash(defaultTemplate)
    })
  })
}
