import { derived, writable } from 'svelte/store';
import { defaultDestinations, Destination, Destinations } from '../models/destinations';

export const destinationsStore = writable<Destinations>(defaultDestinations);
type DestinationsStore = typeof destinationsStore;

const itemKey = "destinations";

export function loadDestination(): Destinations {
  const loadad = localStorage.getItem(itemKey);
  return loadad !== null ? JSON.parse(loadad) : defaultDestinations;
}

export function saveDestination(destinations: Destinations) {
  if (destinations === defaultDestinations) return;
  localStorage.setItem(itemKey, JSON.stringify(destinations));
}

export const currentDetinationStore = writable<string | undefined>(defaultDestinations[0].name);
type CurrentDetinationStore = typeof currentDetinationStore;

export const currentDetinationInfoStore = derived<[CurrentDetinationStore, DestinationsStore], Destination | undefined>(
  [currentDetinationStore, destinationsStore],
  ([$currentDestination, $destinations]) =>
    $currentDestination !== undefined ? $destinations.find(({ name }) => name === $currentDestination) : undefined
);

export type CurrentDetinationInfoStore = typeof currentDetinationInfoStore