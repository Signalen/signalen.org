import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation/index.en.js'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ResponsiveImage from '../components/ResponsiveImage'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Payoff from '../components/Payoff/index.en.js'
import Heading from '../components/Heading'
import Span from '../components/Span'
import Background from '../components/Background'
import Logos from '../components/Logos'
import Timeline from '../components/Timeline'

import meldingMakenOntvangen from '../images/melding-maken-ontvangen.svg'
import categoriserenRouteren from '../images/categoriseren-routeren.svg'
import behandelen from '../images/behandelen.svg'
import rapportage from '../images/rapportage.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Working together for quality of life" />
    <Background backgroundColor="#A8D0E6">
      <Container>
        <Navigation as="nav" />
        <Section>
          <Payoff />
        </Section>
      </Container>
    </Background>
    <Background backgroundColor="#24305E">
      <Container>
        <Logos />
      </Container>
    </Background>
    <Container>
      <Section id="about-signalen">
        <Flex>
          <Box>
          <p> Signalen is an open-source process and task system for governments, which automatically categorizes and routes reports about public space for processing by the appropriate handler. </p>
          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
        <iframe title="Video with an introduction to Sigalen" src="https://www.youtube-nocookie.com/embed/HRPUDvkn57Y?autoplay=0&showinfo=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={meldingMakenOntvangen} alt="Illustratie van persoon met pen" />
          </Box>
          <Box width={3/5}>
            <h2>Classify notifications</h2>
            <p>Residents, visitors and companies make their reports about the public space in a text field on a page on the municipality's website. This text field is in fact an interactive portal. The reporter doesn't have to choose a category for the report. Signalen automatically assigns them, based on hundreds of thousands of previously classified reports. Municipalities that are going to use Signalen train the algorithm with their own data in their own classifications.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Meldingen routeren</h2>
            <p>De automatische classificering kan worden gekoppeld aan dynamische routering. Dit betekent dat op basis van de categorie van een melding, deze automatisch wordt doorverwezen naar de juiste behandelaar en/of afdeling. Iedere gemeenten configureert Signalen voor haar eigen, lokale situatie.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={categoriserenRouteren} alt="Illustratie van robot" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={behandelen} alt="Illustratie van persoon in werkkleding" />
          </Box>
          <Box width={3/5}>
            <h2>Meldingen behandelen</h2>
            <p>Medewerkers die meldingen behandelen zien in Signalen altijd de actuele status van een melding, en de historie. Dat scherm kan tot op bepaalde hoogte worden gepersonaliseerd, voor groter werkgemak.</p>
            <p>Medewerkers hebben geen nieuwe inloggegevens nodig om te werken met Signalen. Inloggen gaat hetzelfde als bij de andere gemeentelijke systemen met behulp van Single Sign On.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Rapporteren</h2>
            <p>Signalen kan eenvoudig worden gekoppeld aan rapportagetools zoals Tableau. Rapportages over meldingen openbare ruimte kunnen dus naar eigen wens worden ingericht.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={rapportage} alt="Illustratie van persoon met tablet waarop grafieken getoond worden" />
          </Box>
        </Flex>
      </Section>
    </Container>
    <Background backgroundColor="#f5f5f6">
      <Container>
        <Section>
          <Heading align="center" fontSize="2rem">Roadmap</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Timeline>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q4 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Klaar voor productie</Heading>
            <p>Oplevering gemeente-neutrale versie Signalen-software. Signalen is klaar voor productie bij de gemeentelijke deelnemers uit de Kopgroep.</p>
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer />
  </Layout>
)

export default IndexPage
