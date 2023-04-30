import '@/root/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../api/apollo-client';
import { Analytics } from '@vercel/analytics/react';
import 'react-responsive-modal/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Analytics />
    </ApolloProvider>
  );
}
