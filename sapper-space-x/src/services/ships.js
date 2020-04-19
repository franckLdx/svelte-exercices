import { gql } from 'apollo-boost';
import { getClient } from '@Services/spaceX-client';

const GET_SHIPS = gql`
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
    query: GET_SHIPS,
    variables: { limit, offset }
  });
  return {
    ships: response.data.shipsResult.data,
    totalCount: response.data.shipsResult.result.totalCount
  };
}

const GET_SHIP = gql`
query($shipId: ID!) {
  shipsResult(find: { id: $shipId }) {
    data {
      id
      name
      type
      year_built 
      image
      
      weight_kg
      url
      
      home_port
      roles
      missions {
        flight
        name
      }
    }
  }
}`;
export async function getShip(fetch, shipId) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_SHIP,
    variables: { shipId }
  });

  return response.data.shipsResult.data[0];
}