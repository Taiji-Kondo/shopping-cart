import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { VFC, Fragment } from 'react'

import { BaseSEO } from '@/layouts/head/BaseSEO'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache,
  name: process.env.NEXT_PUBLIC_SITE_NAME,
  version: process.env.NEXT_PUBLIC_CLIENT_VERSION,
})

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <ChakraProvider resetCSS={true}>
          <BaseSEO />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </Fragment>
  )
}

export default MyApp
