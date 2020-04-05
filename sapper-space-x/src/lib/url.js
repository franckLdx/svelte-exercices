export const pastLaunchesSegment = 'pastLaunches';
export function getPastLaunchesURL(page, totalPage) {
  let query = ''
  if (page !== undefined) {
    query = `&page=${page}`;
  }
  if (totalPage !== undefined) {
    query += `&totalPages=${totalPage}`;
  }
  query = query.replace(/&/, '?')

  return `${pastLaunchesSegment}${query}`;
}

export function getLaunchURL(launchId) {
  return `launches/${launchId}`
}