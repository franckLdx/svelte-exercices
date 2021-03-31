export const launchesSegment = '/launches';
export const rocketsSegment = '/rockets';
export const shipsSegment = '/ships';
export const aboutSegment = '/about';

export function getLaunchesPageUrl(pageNumber = 1) {
  return `${launchesSegment}?${getPageNumber(pageNumber)}`;
}

export function getLaunchUrl(launchId) {
  return `${launchesSegment}/${launchId}`
}

export function getRocketsUrl() { return rocketsSegment; }

export function getRocketUrl(rocketId) { return `${rocketsSegment}/${rocketId}`; }

export function getShipsPageUrl(pageNumber = 1) {
  return `${shipsSegment}?${getPageNumber(pageNumber)}`
}

export function getShipUrl(shipId) {
  return `${shipsSegment}/${shipId}`;
}

export function getAboutUrl() { return aboutSegment; }

export const rocketsImage = {
  falcon1: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg",
  falcon9: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SpX_CRS-2_launch_-_further_-_cropped.jpg/1200px-SpX_CRS-2_launch_-_further_-_cropped.jpg",
  falconheavy: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/KSC-20190624-PH_KLS01_0056.jpg/1200px-KSC-20190624-PH_KLS01_0056.jpg",
  starship: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Starship_2019.png/1200px-Starship_2019.png"
}
const getPageNumber = pageNumber => `page=${pageNumber}`;