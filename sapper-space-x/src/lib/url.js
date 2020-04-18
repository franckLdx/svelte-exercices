export const launchesSegment = '/launches';
export const rocketsSegment = '/rockets';
export const aboutSegment = '/about';

export function getLaunchesURL(page, totalPage) {
  let query = ''
  if (page !== undefined) {
    query = `&page=${page}`;
  }
  if (totalPage !== undefined) {
    query += `&totalPages=${totalPage}`;
  }
  query = query.replace(/&/, '?')

  return `${launchesSegment}${query}`;
}

export function getLaunchURL(launchId) {
  return `${launchesSegment}/${launchId}`
}

export function getRocketsUrl() { return rocketsSegment; }

export function getRocketUrl(rocketId) { return `${rocketsSegment}/${rocketId}`; }

export function getAboutUrl() { return aboutSegment; }

export const rocketsImage = {
  falcon1: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg",
  falcon9: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SpX_CRS-2_launch_-_further_-_cropped.jpg/1200px-SpX_CRS-2_launch_-_further_-_cropped.jpg",
  falconheavy: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/KSC-20190624-PH_KLS01_0056.jpg/1200px-KSC-20190624-PH_KLS01_0056.jpg",
  starship: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Starship_2019.png/1200px-Starship_2019.png"
}