import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import SideBar from '../src/components/SideBar'
import AOS from "aos";
import "aos/dist/aos.css";
import '../global.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <ChakraProvider>
      <SideBar>
        <Head>
          <meta name="description" content="Ryzen Host, a melhor hospedagem do mercado." />
          <script src="chat.js" async />
          <link rel="icon" href="/ryzen.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </SideBar>
    </ChakraProvider>
  )
}

export default MyApp
