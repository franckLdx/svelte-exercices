<script lang="ts">
	import LaunchCard from '$lib/app/launches/LaunchCard.svelte';
	import LaunchPagination from '$lib/app/launches/LaunchPagination.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import { request, gql } from 'graphql-request/dist';
	import type { Launch } from 'src/model/Launch';

	const query = gql`
		{
			launches(limit: 10, sort: "launch_date_utc", order: "desc") {
				mission_name
				details
				links {
					mission_patch_small
				}
			}
		}
	`;

	const result = request<{ launches: Launch[] }>('https://api.spacex.land/graphql', query);
</script>

<div>
	{#await result}
		<p>...waiting</p>
	{:then launchesResult}
		<Grid>
			{#each launchesResult.launches as launch}
				<LaunchCard {launch} />
			{/each}
		</Grid>
		<LaunchPagination />
	{:catch error}
		BOOM
	{/await}
</div>

<style lang="postcss">
	div {
		@apply bg-container;
		@apply h-full;
	}
</style>
