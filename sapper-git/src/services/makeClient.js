import ApolloClient from 'apollo-boost';
import { token } from './.token';

export const getClient = (fetch) => {
  return new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: { authorization: `Bearer ${token}` },
    fetch
  });
}