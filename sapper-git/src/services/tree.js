import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_TREE = gql`
query($repository: String!, $owner: String!, $branch: String!, $oid: String!) {
  repository(name: $repository, owner: $owner) {
    object(expression: "master:", oid: $oid) {
      ...on Tree {
        entries {
          oid
          name
          type
          object {
            ...on Blob {
              byteSize
            }
          }
        }
      }
    }
  }
}`;

export async function getEntries(name, owner, branch, oid) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_TREE,
    variables: { name, owner, branch, oid }
  });
  return response.data.repository;
}
