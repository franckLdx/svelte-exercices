import { gql, request } from 'graphql-request/dist';
import type { Variables } from 'graphql-request/dist/types';

export function prepareQuery(rawQuery: string): string {
  return gql`${rawQuery}`;
}

export async function load<Returned>(query: string, variables?: Variables): Promise<Returned> {
  return request<Returned>(
    'https://api.spacex.land/graphql',
    query,
    variables
  );
}