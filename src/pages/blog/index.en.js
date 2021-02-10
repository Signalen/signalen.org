import React from "react"
import { graphql } from "gatsby"


import SEO from '../../components/SEO'
import Navigation from '../../components/Navigation'
import Layout from '../../components/Layout'
import Flex from '../../components/Flex'
import Box from '../../components/Box'
import ResponsiveImage from '../../components/ResponsiveImage'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Span from '../../components/Span'
import Background from '../../components/Background'
import Logos from '../../components/Logos'


import PostLink from "../../components/PostLink"

const IndexPage = ({
  location,

  data: {
    allMarkdownRemark: { edges }
  }

}) => (
  <Layout>
    <SEO title="Signalen - Latest news" />
    <Background backgroundColor="#A8D0E6">
      <Container>
        <Navigation as="nav" location={location} />
      </Container>
    </Background>

    <Container>

        <Flex>
          <Box>
          <h2>Latest news</h2>
          <p>{
            edges.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
              .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

          }</p>

          </Box>
        </Flex>

    </Container>
    <Footer />
  </Layout>
)

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
