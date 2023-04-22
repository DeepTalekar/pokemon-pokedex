import '@/root/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../api/apollo-client';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
