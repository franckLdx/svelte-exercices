import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_CONTENT = gql`
query($name: String!, $owner: String!, $oid: GitObjectID!) {
  repository(name: $name, owner: $owner) {
    object(oid: $oid) {
      ...on Blob {
        text
      }
    }
  }
}
`;

export async function getContent(fetch, name, owner, oid) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_CONTENT,
    variables: { name, owner, oid: `${oid}` }
  });
  return response.data.repository.object.text;
}