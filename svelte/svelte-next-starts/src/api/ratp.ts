import type { DepartureStation } from "../models/destinations";
import type { Trafic } from "../models/traffic";

const url = "https://api-ratp.pierre-grimaud.fr/v4";

var headers = new Headers();
headers.append("accept", "application/json");

export async function traficApi(): Promise<Readonly<Trafic>> {
  const response = await fetch(`${url}/traffic`, { headers });
  return await parseJsonResponse(response, 'Failed to load traffic');
}

export async function scheduledDepartures({ line, station, way }: DepartureStation): Promise<string[]> {
  const response = await fetch(`${url}/schedules/${line.type}/${line.code}/${station.slug}/${way}`, { headers });
  const result = await parseJsonResponse(response, 'Failed to load schedules');
  return result.schedules.map(({ message }) => (message));
}


async function parseJsonResponse(response: Response, errMessage: string) {
  checkResponse(response, errMessage);
  const result = await response.json();
  return result.result;
}

function checkResponse(response: Response, errMessage: string) {
  if (!response.ok) {
    throw new Error(`${errMessage}: ${response.status}/${response.statusText}`);
  }
}