import { getClient } from './makeClient';
import { gql } from 'apollo-boost';

const GET_VIEWER_REPOSITORIES = gql`
  query {
    viewer {
      login
      repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
        totalCount,
        nodes {
          id
          name
          description
          languages(first: 5, orderBy: {field: SIZE, direction: ASC}) {
            nodes {
              name,
              color
            }
          }
        }
        pageInfo {
          startCursor
          hasPreviousPage
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export async function getRepositories(fetch) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_VIEWER_REPOSITORIES
  });
  return response.data.viewer.repositories;
}