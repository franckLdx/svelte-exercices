
export function getNumberQueryParameter(query: URLSearchParams, paramKey: string): number | null {
  if (!query.has(paramKey) || query.get(paramKey)?.length > 100) {
    return null;
  }
  const value = Number(query.get(paramKey));
  return isNaN(value) ? null : value;
}