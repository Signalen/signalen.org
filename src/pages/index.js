import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ResponsiveImage from '../components/ResponsiveImage'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Payoff from '../components/Payoff'
import Heading from '../components/Heading'
import Span from '../components/Span'
import Background from '../components/Background'
import Logos from '../components/Logos'
import Timeline from '../components/Timeline'

import meldingMakenOntvangen from '../images/melding-maken-ontvangen.svg'
import categoriserenRouteren from '../images/categoriseren-routeren.svg'
import behandelen from '../images/behandelen.svg'
import rapportage from '../images/rapportage.svg'

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Samenwerken aan leefbaarheid" />
    <Background backgroundColor="#A8D0E6">
      <Container>
        <Navigation as="nav" location={location} />
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
      <Section id="over-signalen">
        <Flex>
          <Box>
            <p>Signalen is een proces- en taaksysteem, ontwikkeld op initiatief van de gemeente Amsterdam voor het effectiever en klantvriendelijker afhandelen van meldingen over de openbare ruimte.</p>
            <p>Amsterdam krijgt per jaar zo’n 300.000 meldingen over de openbare ruimte te verwerken. Van huisraad bij de vuilnisbak tot en met verlaten sloepjes in de gracht. Ruim 1.400 ambtenaren werken 24/7 met het afhandelen van meldingen in Signalen. Sinds de invoering van Signalen is de klanttevredenheid over de afhandeling van meldingen in Amsterdam met ruim 30 procent gestegen.</p>
            <p>De Signalen software is open source ontwikkeld en kan vrij gebruikt worden door andere overheden en gemeenten.</p>
          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
        <iframe title="Video met introductie van Signalen" src="https://www.youtube-nocookie.com/embed/AdBNyYwbf8A?autoplay=0&showinfo=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={meldingMakenOntvangen} alt="Illustratie van persoon met pen" />
          </Box>
          <Box width={3/5}>
            <h2>Meldingen classificeren</h2>
            <p>Bewoners, bezoekers en bedrijven doen hun meldingen over de openbare ruimte in een tekstveld op een pagina op de gemeentewebsite. Dit tekstveld is in feite een interactief portaal. De melder hoeft niet langer zelf een categorie te kiezen voor de melding. Signalen kent die automatisch toe, op basis van honderdduizenden eerder geclassificeerde meldingen. Gemeenten die Signalen gaan gebruiken, trainen het algoritme met eigen data in eigen classificaties.</p>
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
