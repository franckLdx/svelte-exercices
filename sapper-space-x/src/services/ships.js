import { gql } from 'apollo-boost';
import { getClient } from '@Services/spaceX-client';

const SHIPS = gql`
query($limit: Int!, $offset: Int!) {
  shipsResult(limit: $limit, offset: $offset, order: "asc", sort: "name") {
    data {
      id
      name
      image
    }
    result {
      totalCount
    }
  }
}`;
export async function getShips(fetch, pageNumber, pageSize) {
  const client = getClient(fetch);
  const limit = pageSize;
  const offset = (pageNumber - 1) * pageSize;
  const response = await client.query({
    query: SHIPS,
    variables: { limit, offset }
  });
  return {
    ships: response.data.shipsResult.data,
    totalCount: response.data.shipsResult.result.totalCount
  };
} 