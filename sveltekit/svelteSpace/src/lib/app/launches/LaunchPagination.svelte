<script lang="ts">
	import { load, prepareQuery } from '$lib/api/spaceX';
	import Pagination from '$lib/components/Pagination.svelte';
	import { goto } from '$app/navigation';
	import { getLaucnhesUrl } from '../routes';

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

	const pagestP: Promise<number> = load<{ launches: Id[] }>(query).then((result) =>
		Math.ceil(result.launches.length / 10)
	);
	const onPage = ({ detail }: CustomEvent<number>) => goto(getLaucnhesUrl(detail));
</script>

<div id="paginationContainer">
	{#await pagestP then pagesCount}
		<Pagination on:page={onPage} {pagesCount} />
	{/await}
</div>
