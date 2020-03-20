import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';
import { getEntriesWhithCommit } from '@Services/commit';


const GET_TREE = gql`
query($repository: String!, $owner: String!, $oid: GitObjectID!) {
  repository(name: $repository, owner: $owner) {
    object(expression: "master:", oid: $oid) {
      ...on Tree {
        entries {
          oid
          name
          type
        }
      }
    }
  }
}`;

export async function getTree(fetch, owner, repository, oid) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_TREE,
    variables: { repository, owner, oid }
  });
  return response.data.repository.object.entries;
}

export async function getTreeContent({ fetch, owner, repository, resourcePath, oid }) {
  const rawContent = await getTree(fetch, owner, repository, oid);
  return await getEntriesWhithCommit({
    fetch: fetch,
    owner,
    repository,
    resourcePath,
    entries: rawContent
  });
}