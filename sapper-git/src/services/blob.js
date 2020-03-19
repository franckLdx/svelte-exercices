import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_CONTENT = gql`
query($repositoryName: String!, $owner: String!, $oid: GitObjectID!) {
  repository(name: $repositoryName, owner: $owner) {
    object(oid: $oid) {
      ...on Blob {
        text
      }
    }
  }
}
`;

export async function getBlobContent(fetch, repositoryName, owner, oid) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_CONTENT,
    variables: { repositoryName, owner, oid: `${oid}` }
  });
  return response.data.repository.object.text;
}