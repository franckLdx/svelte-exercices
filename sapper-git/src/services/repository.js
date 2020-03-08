import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_REPOSITORY = gql`
query($name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
    name
    description
    createdAt
    stargazers {
      totalCount
    }
    issues {
      totalCount
    }
    watchers {
      totalCount
    }
    languages(first: 10) {
      nodes {
        name
        color
      }
    }
    licenseInfo {
      body,
      name, nickname
    }
    releases(last: 1) {
      nodes {
        name
        description
        publishedAt
      }
    }
    object(expression: "master:") {
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

// refs(first: 100, refPrefix: "refs/heads/") {
//   nodes {
//     name
//   }
// }
export async function getRepository(fetch, name, owner) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_REPOSITORY,
    variables: { name, owner }
  });
  return response.data.repository;
}

const GET_ENTRIES = gql`
query($name: String!, $owner: String!, $branch: String!, $oid: String!) {
  repository(name: $name, owner: $owner) {
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

// export async function getEntries(name, owner, branch, oid) {
//   const client = getClient(fetch);
//   const response = await client.query({
//     query: GET_ENTRIES,
//     variables: { name, owner, branch, oid }
//   });
//   return response.data.repository;
// }

