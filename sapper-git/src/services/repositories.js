import { getClient } from './makeClient';
import { gql } from 'apollo-boost';

const REPOSITORY_DESC = `
nodes {
  id
  name
  description
  languages(first: 5, orderBy: {field: SIZE, direction: ASC}) {
    nodes {
      name,
      color
    }
  }
}`;

const PAGE_INFO = `
pageInfo {
  startCursor
  hasPreviousPage
  endCursor
  hasNextPage
}`;

const GET_FIRST_REPOSITORIES = gql`
query($pageSize: Int!) {
  viewer {
    repositories(first: $pageSize, orderBy: { field: UPDATED_AT, direction: DESC }) {
      ${REPOSITORY_DESC}
      ${PAGE_INFO}
    }
  }
}`;

export async function getFirstRepositories(fetch) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_FIRST_REPOSITORIES,
    variables: { pageSize: 10 }
  });
  return response.data.viewer.repositories;
}

const GET_VIEWER_PREVIOUS_REPOSITORIES = gql`
query($pageSize: Int!, $before:String) {
  viewer {
    repositories(last: $pageSize, before: $before, orderBy: { field: UPDATED_AT, direction: DESC }) {
      ${REPOSITORY_DESC}
      ${PAGE_INFO}
    }
  }
}`;

export async function getPreviousRepositories(fetch, before) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_VIEWER_PREVIOUS_REPOSITORIES,
    variables: { pageSize: 10, before }
  });
  return response.data.viewer.repositories;
}

const GET_VIEWER_NEXT_REPOSITORIES = gql`
query($pageSize: Int!, $after:String!) {
  viewer {
    repositories(first: $pageSize, after: $after, orderBy: { field: UPDATED_AT, direction: DESC }) {
      ${REPOSITORY_DESC}
      ${PAGE_INFO}
    }
  }
}`;

export async function getNextRepositories(fetch, after) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_VIEWER_NEXT_REPOSITORIES,
    variables: { pageSize: 10, after }
  });
  return response.data.viewer.repositories;
}
const GET_LAST_REPOSITORIES = gql`
query($pageSize: Int!) {
  viewer {
    repositories(last: $pageSize, orderBy: { field: UPDATED_AT, direction: DESC }) {
      ${REPOSITORY_DESC}
      ${PAGE_INFO}
    }
  }
}`;

export async function getLastRepositories(fetch) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_LAST_REPOSITORIES,
    variables: { pageSize: 10 }
  });
  return response.data.viewer.repositories;
}
