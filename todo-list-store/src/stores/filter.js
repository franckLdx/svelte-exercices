import { writable } from 'svelte/store';

export const FILTER_ALL = Symbol('ALL');
export const FILTER_DONE = Symbol('DONE');
export const FILTER_UNDONE = Symbol('UNDONE');

export const filter = writable(FILTER_ALL);