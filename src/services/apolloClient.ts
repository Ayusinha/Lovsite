import { ApolloClient, InMemoryCache } from '@apollo/client';
import Config from './env';

// Use environment variable for GraphQL endpoint
const client = new ApolloClient({
  uri: Config.GRAPHQL_ENDPOINT || 'https://your-graphql-endpoint.com/graphql',
  cache: new InMemoryCache(),
});

export default client; 