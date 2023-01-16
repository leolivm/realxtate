import 'theme/styles.scss'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { client } from 'lib/apollo'
import { AppProvider } from 'provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  )
}
