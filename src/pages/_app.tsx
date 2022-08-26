import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Head >

        <title>Alex's Portfolio</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <ChakraProvider theme={theme}>

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
