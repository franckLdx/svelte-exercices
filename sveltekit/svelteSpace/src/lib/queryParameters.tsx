
export function getNumberQueryParameter(query: URLSearchParams, paramKey: string): number | null {
  if (query.get(paramKey)?.length > 100) {
    return null;
  }
  const value = Number(query.get(paramKey));
  return isNaN(value) ? null : value;
}