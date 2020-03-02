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
  }
}`;

export async function getRepository(fetch, name, owner) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_REPOSITORY,
    variables: { name, owner }
  });
  return response.data.repository;
}
