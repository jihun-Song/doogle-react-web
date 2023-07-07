import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    </>
    
  )
}

export default MyApp
