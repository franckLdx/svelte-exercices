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

export async function getTree(fetch, repository, owner, oid) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_TREE,
    variables: { repository, owner, oid }
  });
  return response.data.repository.object.entries;
}

export async function getTreeContent(fetch, repository, owner, oid) {
  const rawContent = await getTree(this.fetch, repository, owner, oid);
  return await getEntriesWhithCommit({
    fetch: this.fetch,
    owner,
    repository,
    path,
    entries: rawContent
  });
}