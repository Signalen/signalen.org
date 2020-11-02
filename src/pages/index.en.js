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

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Working together for quality of life" />
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
      <Section id="about-signalen">
        <Flex>
          <Box>
          <p> Signalen is an open source process and task system for governments, which automatically categorizes and routes reports about public space for processing by the appropriate handler. </p>
          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
        <iframe title="Video with introduction of Signalen" src="https://www.youtube-nocookie.com/embed/AdBNyYwbf8A?autoplay=0&showinfo=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <h2>Routing notifications</h2>
            <p>The automatic classification can be linked to dynamic routing. This means that based on the category of a notification, it is automatically referred to the correct handler and/or department. Each municipality configures Signalen for its own local situation.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={categoriserenRouteren} alt="Illustration of robot" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={behandelen} alt="Illustratie van persoon in werkkleding" />
          </Box>
          <Box width={3/5}>
            <h2>Handling reports</h2>
            <p>Employees handling notifications always see the current status of a notification in Signalen, and its history. That screen can be personalized to a certain extent, for greater ease of work.</p>
            <p>Employees do not need new login details to work with Signalen. Logging in is the same as with the other municipal systems using Single Sign On.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Report</h2>
            <p>Signalen can easily be linked to reporting tools such as Tableau. Reports on public space reports can therefore be set up according to your own wishes.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={rapportage} alt="Illustratie of person with tablet showing graphs" />
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
            <Heading as="h3" fontSize="1.5rem">Ready for production</Heading>
            <p>Delivery of a municipal neutral version of the Signalen software. Signalen is ready for production for the municipal participants from the Kopgroep.</p>
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer location={location} />
  </Layout>
)

export default IndexPage
