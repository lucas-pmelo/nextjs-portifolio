import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lucas Melo
          </Heading>
          <p>Digital Craftzman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/lucas.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lucas is a Front-End Developer located in Brazil. Currently, studying
          to become a full-stack developer. He started programming in January
          2022 and since then, programming has become his passion. Lucas is also
          a music lover, always looking for more knowledge about all the areas
          he loves! Currently, he is working on a project called{' '}
          <NextLink href="#">
            <Link>O2Future</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="#">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              {' '}
              My portifolio{' '}
            </Button>{' '}
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in São Paulo, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started studying programming by himself, learning all about Front-End
          Development with React.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Entered in a college called FIAP to become a analysis and systems
          developer (full-stack developer).
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed the Master&apos;s Program at FIAP, and become a full-stack
          developer, working on freelance.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Movies,{' '}
          <Link href="https://www.youtube.com/channel/UCgSyfSj1yx43ok6nHzCeEwQ">
            Music
          </Link>
          , Playing Instruments,{' '}
          <Link href="https://soundcloud.com/trezekm">Producing Music</Link>,
          Games, Playing VolleyBall
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
