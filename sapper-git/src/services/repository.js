import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';

const GET_REPOSITORY = gql`
query($repositoryName: String!, $owner: String!) {
  repository(name: $repositoryName, owner: $owner) {
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

export async function getRepository(fetch, repositoryName, owner) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_REPOSITORY,
    variables: { repositoryName, owner }
  });
  return response.data.repository;
}
