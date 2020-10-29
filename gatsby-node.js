const path = require('path')
const { slash } = require('gatsby-core-utils')

const templates = {
  default: path.resolve('src/templates/default.js')
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 10000) {
        edges {
          node {
            fields {
              slug
              langKey
            }
            frontmatter {
              template
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
      path: node.fields.slug,
      component: slash(templates[node.frontmatter.template || 'default'])
    })
  })
}
