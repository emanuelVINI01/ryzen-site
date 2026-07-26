import { Box, Container, Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Evaluation from '../src/components/Evaluation'
import Footer from '../src/components/Footer'
import Information from '../src/components/Information'
import RepresentProducts from '../src/components/RepresentProducts'
import Statics from '../src/components/Statics'
import WhyBuy from '../src/components/WhyBuy'
import Features from '../src/components/Features'
import { testimonials } from '../src/data/plans'

export default function Home() {
  const boxBg = useColorModeValue('gray.200', 'gray.800');

  return (
    <>
      <Head>
        <title>RyzenHosting - Início</title>
        <meta name="description" content="RyzenHosting, a melhor hospedagem do mercado." />
      </Head>
      <Information />
      <RepresentProducts />
      <Divider mt={20} mb={20} />
      <WhyBuy />
      <Divider mt={30} />
      <Statics />
      <Divider mt={30} />
      <Features />
      <Box bg={boxBg} data-aos={"fade-down"} >
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>O que dizem sobre nós</Heading>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            {testimonials.map((t, i) => (
              <Evaluation
                key={i}
                role={t.role}
                describe={t.describe}
                photo={t.photo}
                name={t.name}
              />
            ))}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
