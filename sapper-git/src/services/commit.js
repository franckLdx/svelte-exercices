import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';
import { addToPath } from '@Lib/url';

const GET_LAST_COMMIT = gql`
query($owner: String!, $repository: String!, $resourcePath: String!) {
  repository(owner: $owner, name: $repository) {
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

export async function getLastCommit({ fetch, owner, repository, resourcePath }) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_LAST_COMMIT,
    variables: { owner, repository, resourcePath }
  });
  return response.data.repository;
}

export async function getEntriesWhithCommit({ fetch, owner, repository, resourcePath, entries }) {
  const loading = [];
  const results = [];
  for (const entry of entries) {
    const loadCommit = getLastCommit({
      fetch,
      owner,
      repository,
      resourcePath: addToPath(resourcePath, entry.name),
    }).then(commit => {
      results.push({ ...entry, commit: commit.object.history.nodes[0] });
    });
    loading.push(loadCommit);
  }
  await Promise.all(loading);
  return results;
}