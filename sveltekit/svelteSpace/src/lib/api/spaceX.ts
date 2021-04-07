import { gql, request } from 'graphql-request/dist';

export function prepareQuery(rawQuery: string) {
  return gql`${rawQuery}`;
}

export async function get<Returned>(query: string): Promise<Returned> {
  return request<Returned>(
    'https://api.spacex.land/graphql',
    query
  );
}