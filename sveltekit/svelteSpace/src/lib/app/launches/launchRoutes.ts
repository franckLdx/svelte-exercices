import { get } from "svelte/store";
import launchesStore from "./LaunchesStore";
import { getNumberQueryParameter } from '$lib/queryParameters';

const pageKey = 'page';
const defaultPageNumber = 1;
const limitKey = 'limit';

interface LaucnhesUrlParams {
  pageNumber: number,
  limit: number
}

export const getLaucnhesUrl = (params?: Partial<LaucnhesUrlParams>): string => {
  const store = get(launchesStore)
  const pageNumber = params?.pageNumber ?? defaultPageNumber;
  const limit = params?.limit ?? store.limit;
  return `launches?${pageKey}=${pageNumber}&${limitKey}=${limit}`
}

export const getLauchParameters = (query: URLSearchParams): LaucnhesUrlParams => {
  const store = get(launchesStore);
  const pageNumber = getNumberQueryParameter(query, pageKey) ?? defaultPageNumber;
  const limit = getNumberQueryParameter(query, limitKey) ?? store.limit;
  return { pageNumber, limit };
}
