import { writable } from 'svelte/store';
import type { Destinations } from '../models/destinations';

const defaultDestinations: Destinations = [];

export const destinationsStore = writable<Destinations>(defaultDestinations);

const itemKey = "destinations";

export function loadDestination(): Destinations {
  const loadad = localStorage.getItem(itemKey);
  return loadad !== null ? JSON.parse(loadad) : defaultDestinations;
}

export function saveDestination(destinations: Destinations) {
  localStorage.setItem(itemKey, JSON.stringify(destinations));
}