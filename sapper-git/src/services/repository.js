import { gql } from 'apollo-boost';
import { getClient } from '@Services/makeClient';
import { getEntriesWhithCommit } from '@Services/commit';

const GET_REPOSITORY = gql`
query($repository: String!, $owner: String!) {
  repository(name: $repository, owner: $owner) {
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
} `;

export async function getRepository(fetch, owner, repository) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_REPOSITORY,
    variables: { owner, repository }
  });
  return response.data.repository;
}

export async function getRepositoryContent(fetch, owner, repository) {
  const { object, ...repositoryInfo } = await getRepository(
    fetch,
    owner,
    repository
  );
  const content = await getEntriesWhithCommit({
    fetch,
    owner,
    repository: repositoryInfo.name,
    parentPath: "/",
    entries: object.entries
  });
  return { repositoryInfo, content };
}