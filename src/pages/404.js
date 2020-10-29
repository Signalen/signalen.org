import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Pagina niet gevonden / page not found" />
    <Container>
      <Section>
        <h1>Pagina niet gevonden / page not found</h1>
        <p>We konden de opgevragen pagina niet vinden.</p>
        <p>We could not find the requested page.</p>
      </Section>
    </Container>
  </Layout>
)

export default NotFoundPage
