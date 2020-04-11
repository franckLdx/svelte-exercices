import { writable } from 'svelte/store';

const { subscribe, set } = writable({ isLoading: false });

export const loadingStore = {
  subscribe,
  setLoading: isloading => set({ isLoading: isloading }),
}
