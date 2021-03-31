import ApolloClient from 'apollo-boost';

export const getClient = fetch => {
  return new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    fetch
  });
}