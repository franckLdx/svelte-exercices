import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

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
