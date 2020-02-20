import { writable, derived } from 'svelte/store';
import produce from 'immer';

const { subscribe, update: _update } = writable({
  email: null,
  name: null,
  body: null
});

const update = cb => {
  const updater = produce(cb);
  return _update(updater);
}

export const store = {
  subscribe,
  setEmail: email => update(state => { state.email = email }),
  setName: name => update(state => { state.name = name }),
  setBody: body => update(state => { state.body = body }),
};

export const canSave = derived(
  [store],
  ([$state]) => isFilled($state.email) && isFilled($state.name) && isFilled($state.body)
);

const isFilled = field => field && field.trim().length;