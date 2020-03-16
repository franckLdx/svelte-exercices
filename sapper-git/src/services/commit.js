import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_LAST_COMMIT = gql`
query($repositoryName: String!, $owner: String!, $resourcePath: String!) {
  repository(name: $repositoryName, owner: $owner) {
    object(expression: "master") {
      ...on Commit {
        history(path: $resourcePath, first: 1) {
          nodes {
            committedDate, message
          }
        }
      }
    }
  }
}
`;

export async function getLastCommit({ fetch, owner, repositoryName, resourcePath }) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_LAST_COMMIT,
    variables: { repositoryName, owner, resourcePath }
  });
  return response.data.repository;
}

export async function getEntriesWhithCommit({ fetch, owner, repositoryName, parentPath, entries, }) {
  const loading = [];
  const results = [];
  for (const entry of entries) {
    const loadCommit = getLastCommit({
      fetch,
      owner,
      repositoryName,
      resourcePath: parentPath ? `${parentPath}/${entry.name}` : entry.name
    }).then(commit => {
      results.push({ ...entry, commit: commit.object.history.nodes[0] });
    });
    loading.push(loadCommit);
  }
  await Promise.all(loading);
  return results;
}