import { writable, derived } from 'svelte/store';

const { subscribe, update } = writable({
  email: null,
  name: null,
  body: null
});

export const store = {
  subscribe,
  setEmail: email => update(state => ({ ...state, email })),
  setName: name => update(state => ({ ...state, name })),
  setBody: body => update(state => ({ ...state, body })),
};

export const canSave = derived(
  [store],
  ([$state]) => isFilled($state.email) && isFilled($state.name) && isFilled($state.body)
);

const isFilled = field => field && field.trim().length;