<script lang="ts">
	import { getNumberQueryParameter } from '$lib/queryParameters';
	import { get, prepareQuery } from '$lib/api/spaceX';
	import LaunchesList from '$lib/app/launches/LaunchesList.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import type { Launch } from 'src/model/Launch';
	import { page } from '$app/stores';

	const pageKey = 'page';
	const limitKey = 'limit';

	const pageNumber = getNumberQueryParameter($page.query, pageKey) ?? 0;
	const limit = getNumberQueryParameter($page.query, limitKey) ?? 10;
	$: offset = pageNumber * limit;

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

	$: result = get<{ launches: Launch[] }>(query, { offset, limit });
</script>

<div id="container">
	{#await result}
		<div id="loading"><Loading /></div>
	{:then launchesResult}
		<LaunchesList launches={launchesResult.launches} />
	{:catch error}
		BOOM
	{/await}
</div>

<style lang="postcss">
	#container {
		@apply bg-container;
		@apply h-full;
	}
	#loading {
		@apply pl-5;
	}
</style>
