import { writable, derived } from 'svelte/store';
import produce from 'immer';

export const EDITING = Symbol('EDITING');
export const SAVING = Symbol('SAVING');
export const SAVED = Symbol('SAVED');
export const ERROR = Symbol('ERROR');

const initial = {
  state: EDITING,
  email: null,
  name: null,
  body: null
};
const fields = ['email', 'name', 'body'];

const { subscribe, set, update: _update } = writable(initial);

const update = cb => {
  const updater = produce(cb);
  return _update(updater);
}

export const store = {
  subscribe,
  setState: state => update(store => {
    store.state = state;
  }),
  setField: (field, value) => update(store => {
    store.state = EDITING;
    store[field] = value
  }),
  clearFields: () => update(store => {
    fields.forEach(field => store[field] = null)
  }),
  reset: () => set(initial),
};

export const canSave = derived(
  [store],
  ([$store]) => [EDITING, ERROR].includes($store.state) && fields.map(field => $store[field]).every(isFilled)
);

export const canClear = derived(
  [store],
  ([$store]) => ![SAVING].includes($store.state)
);

export const canClose = derived(
  [store],
  ([$store]) => [EDITING, SAVED, ERROR].includes($store.state)
);

const isFilled = field => field && field.trim().length;