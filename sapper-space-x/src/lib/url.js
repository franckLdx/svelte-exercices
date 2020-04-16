export const launchesSegment = '/launches';
export const pastLaunchesSegment = '/pastLaunches';
export const rocketsSegment = '/rockets';
export const aboutSegment = '/about';

export function getPastLaunchesURL(page, totalPage) {
  let query = ''
  if (page !== undefined) {
    query = `&page=${page}`;
  }
  if (totalPage !== undefined) {
    query += `&totalPages=${totalPage}`;
  }
  query = query.replace(/&/, '?')

  return `${launchesSegment}${pastLaunchesSegment}${query}`;
}

export function getLaunchURL(launchId) {
  return `${launchesSegment}/${launchId}`
}

export function getRocketsUrl() { return rocketsSegment; }

export function getRocketUrl(rocketId) { return `${rocketsSegment}/${rocketId}`; }

export function getAboutUrl() { return aboutSegment; }
