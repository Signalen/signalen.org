import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Container from '../components/Container'

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
      html
    }
  }
`
