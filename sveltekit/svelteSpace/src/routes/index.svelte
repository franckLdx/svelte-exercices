<script lang="ts">
	import { get, prepareQuery } from '$lib/api/spaceX';
	import LaunchesList from '$lib/app/launches/LaunchesList.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import type { Launch } from 'src/model/Launch';

	const query = prepareQuery(`
		{
			launches(limit: 10, sort: "launch_date_utc", order: "desc") {
				mission_name
				details
				links {
					mission_patch_small
				}
			}
		}
	`);

	const result = get<{ launches: Launch[] }>(query);
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
