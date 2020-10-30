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
          Heb je ideeën over de toekomstige ontwikkeling van Signalen of mis
          je bepaalde functionaliteit? Kijk op het <a href="https://github.com/orgs/Signalen/projects/2">feature request backlog</a>.
      </Section>
    </Container>
    <Container>
      <Timeline>
      <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">2018</Span>
            <Heading as="h3" fontSize="1.5rem">Start ontwikkeling SIA</Heading>
            <p>Gemeente Amsterdam start de ontwikkeling van Signalen in Amsterdam (SIA) met de afdeling Dienstverlening en het Datalab. SIA is opensource en daarmee vrij bruikbaar voor anderen.</p>
            <ResponsiveImage src={startOntwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">2020</Span>
            <Heading as="h3" fontSize="1.5rem">Start initiatief</Heading>
            <p>Start van het Signalen initiatief! Veel gemeenten in Nederland hebben interesse voor Signalen. Op basis van deze animo, start VNGr met het opschalen van Signalen.</p>
            <ResponsiveImage src={startInitiatief} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">2 maart 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Kopgroep Signalen</Heading>
            <p>‘s-Hertogenbosch, Amsterdam, Almere, VNG Realisatie vormen samen de Kopgroep, gefaciliteerd door de Foundation for Public Code met als doel om Signalen bruikbaar te maken voor andere gemeenten.</p>
            <ResponsiveImage src={connectingTeams} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">April 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Kopgroep van start</Heading>
            <p>De Kopgroep start met het aanpassen van de code in sprints van twee weken.</p>
            <p>De Signalen-software die in Amsterdam is ontwikkeld bevatte allerlei specifieke Amsterdam variabelen waardoor de Signalen software niet onmiddellijk bruikbaar was voor andere gemeenten en overheden.</p>
            <ResponsiveImage src={sprint} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Aug 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Eerste communitydag</Heading>
            <p>Eerste Signalen Communitydag met de Kopgroep. Ook de gemeenten Den Haag, Utrecht en Haarlem zijn aanwezig als Signalen supporters.</p>
            <ResponsiveImage src={community} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Sept 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Signalen as a Service</Heading>
            <p>Uitwerken van de gemeentelijke eisen en wensen v.w.b. Beheer en ondersteuning op ‘Signalen-as-a-Service’.</p>
            <ResponsiveImage src={saas} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Sept 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Integrale roadmap </Heading>
            <p>De start richting één integrale functionele roadmap. De roadmap laat zien waar Signalen heen gaat en bevat features die voor iedere gemeente waardevol zijn.</p>
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q4 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Klaar voor productie</Heading>
            <p>Oplevering gemeente-neutrale versie Signalen-software. Signalen is klaar voor productie bij de gemeentelijke deelnemers uit de Kopgroep.</p>
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">2021</Span>
            <Heading as="h3" fontSize="1.5rem">Opschalen</Heading>
            <p>Opschalen van Signalen bij Nederlandse gemeenten.</p>
            <ResponsiveImage src={doorontwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer />
  </Layout>
)

export default RoadmapPage
