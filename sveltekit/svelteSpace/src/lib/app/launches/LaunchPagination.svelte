<script lang="ts">
	import { get, prepareQuery } from '$lib/api/spaceX';
	import Pagination from '../Pagination.svelte';

	interface Id {
		mission_id: string;
	}

	const query = prepareQuery(`
		{
			launches(limit: 1000000) {
				mission_id
			}
		}
	`);

	const pagestP: Promise<number> = get<{ launches: Id[] }>(query).then((result) =>
		Math.ceil(result.launches.length / 10)
	);
</script>

<div id="paginationContainer">
	{#await pagestP}
		<p>...waiting</p>
	{:then pagesCount}
		<Pagination {pagesCount} />
	{/await}
</div>
