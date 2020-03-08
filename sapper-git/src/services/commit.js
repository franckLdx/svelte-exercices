import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_LAST_COMMIT = gql`
query($name: String!, $owner: String!, $resourceName: String!) {
  repository(name: $name, owner: $owner) {
    object(expression: "master") {
      ...on Commit {
        history(path: $resourceName, first: 1) {
          nodes {
            committedDate, message
          }
        }
      }
    }
  }
}
`;

export async function getLastCommit(fetch, name, owner, resourceName) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_LAST_COMMIT,
    variables: { name, owner, resourceName }
  });
  return response.data.repository;
}
