import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_LAST_COMMIT = gql`
query($repositoryName: String!, $owner: String!, $resourceName: String!) {
  repository(name: $repositoryName, owner: $owner) {
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

export async function getLastCommit(fetch, repositoryName, owner, resourceName) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_LAST_COMMIT,
    variables: { repositoryName, owner, resourceName }
  });
  return response.data.repository;
}
