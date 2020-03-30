export function getPastLaunchesURL(page, totalPage) {
  let query = ''
  if (page !== undefined) {
    query = `&page=${page}`;
  }
  if (totalPage !== undefined) {
    query += `&totalPages=${totalPage}`;
  }
  query = query.replace(/&/, '?')

  return `pastLaunches${query}`;
}