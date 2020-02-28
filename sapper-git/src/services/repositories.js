import { getClient } from './makeClient';
import { gql } from 'apollo-boost';

const GET_VIEWER_REPOSITORIES = gql`
  query {
    viewer {
      login
      repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          createdAt
          id
          url
          description
          languages(first: 10, orderBy: {field: SIZE, direction: ASC}) {
            nodes {
              name,
              color
            }
          }
        }
        pageInfo {
          endCursor
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
  // console.log(JSON.stringify(response, null, 2))
  return response.data.viewer.repositories.nodes;
}