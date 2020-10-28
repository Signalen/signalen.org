import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import ResponsiveImage from '../components/ResponsiveImage'
import Layout from '../components/Layout'

import Footer from '../components/Footer'
import Section from '../components/Section'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Background from '../components/Background'
import Timeline from '../components/Timeline'
import Span from '../components/Span'

import doorontwikkeling from '../images/doorontwikkeling.svg'
import community from '../images/community.svg'
import sprint from '../images/sprint.svg'
import connectingTeams from '../images/connecting-teams.svg'
import startOntwikkeling from '../images/start-ontwikkeling.svg'
import startInitiatief from '../images/start-initiatief.svg'
import saas from '../images/saas.svg'

const RoadmapPage = ({ location }) => (
  <Layout>
    <SEO title="Roadmap" />
    <Container>
      <Navigation as="nav" location={location} />
    </Container>
    <Background backgroundColor="#f5f5f6">
      <Container>
        <Section>
          <Heading align="center">Roadmap</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Section>
          Do you have ideas about the future development of Signalen or do you need new functionality?
          Check out the <a href="https://github.com/orgs/Signalen/projects/2">feature request backlog</a>.
      </Section>
    </Container>
    <Container>
      <Timeline>
      <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">2018</Span>
            <Heading as="h3" fontSize="1.5rem">Start of development of SIA</Heading>
            <p>The Municipality of Amsterdam starts the development of Signalen in Amsterdam (SIA) with the Department of Services and the Datalab. SIA is open source and therefore freely usable for others.</p>
            <ResponsiveImage src={startOntwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">2020</Span>
            <Heading as="h3" fontSize="1.5rem">Start initiative</Heading>
            <p>Start of the Signalen initiative! Many municipalities in the Netherlands are interested in Signalen. Based on this enthusiasm, VNGr starts scaling up Signalen.</p>
            <ResponsiveImage src={startInitiatief} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">March 2nd, 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Signalen core group</Heading>
            <p>'s-Hertogenbosch, Amsterdam, Almere, VNG Realization and the Foundation for Public Code together form the Kopgroep with the aim of making Signalen usable for other municipalities.</p>
            <ResponsiveImage src={connectingTeams} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">April 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Core group starts</Heading>
            <p>The core group will start adapting the code in sprints of two weeks.</p>
            <p>The Signalen software that was developed in Amsterdam contained all kinds of specific Amsterdam variables which made the Signalen software not immediately usable for other municipalities and governments.</p>
            <ResponsiveImage src={sprint} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Aug 2020</Span>
            <Heading as="h3" fontSize="1.5rem">First community day</Heading>
            <p>First Signalen Community day with the core group. The municipalities of The Hague, Utrecht and Haarlem are also present as Signalen supporters.</p>
            <ResponsiveImage src={community} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Sept 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Signalen as a Service</Heading>
            <p>Elaboration of the municipal requirements and wishes for management and support on 'Signalen-as-a-Service'.</p>
            <ResponsiveImage src={saas} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Sept 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Integral roadmap</Heading>
            <p>The start towards one integral functional roadmap. The roadmap shows where Signalen is going and contains features that are valuable for every municipality.</p>
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q4 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Ready for production</Heading>
            <p>Delivery of a municipal neutral version of the Signalen software. Signalen is ready for production for the municipal participants from the core group.</p>
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">2021</Span>
            <Heading as="h3" fontSize="1.5rem">Scaling up</Heading>
            <p>Scaling up Signalen at Dutch municipalities.</p>
            <ResponsiveImage src={doorontwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer location={location} />
  </Layout>
)

export default RoadmapPage
