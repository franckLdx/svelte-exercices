import { load, prepareQuery } from '$lib/api/spaceX';
import type { Launch } from 'src/model/Launch';
import { get, writable } from 'svelte/store';

interface Data {
	limit: number,
	launches: { [pageNumber: number]: Launch[] }
}

const initialData: Data = {
	limit: 10,
	launches: {},
}

const query = prepareQuery(`
	query ($offset: Int!, $limit: Int!) {
		launches(limit: $limit, offset: $offset, sort: "launch_date_utc", order: "desc") {
			mission_name
			details
			links {
				mission_patch_small
			}
		}
	}
`);

function createLaunchesStore() {
	const store = writable<Data>(initialData);;
	const { subscribe, update } = store;

	return {
		subscribe,
		loadPage: async (pageNumber: number) => {
			const { limit, launches } = get(store);
			if (launches[pageNumber]) {
				return;
			}
			const offset = limit * (pageNumber - 1);
			const loadedLaunched = await load<{ launches: Launch[] }>(query, { offset, limit });
			update(data => ({
				limit,
				pageNumber,
				launches: { ...data.launches, [pageNumber]: loadedLaunched.launches }
			}))
		},
		setLimit: (limit: number) => update(data => data.limit === limit ? data : initialData),
	};
}

const launchesStore = createLaunchesStore();
export default launchesStore;