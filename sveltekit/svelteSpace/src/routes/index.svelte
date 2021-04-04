<script lang="ts">
	import LaunchCard from '$lib/components/launches/LaunchCard.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import { request, gql } from 'graphql-request/dist';
	import type { Launch } from 'src/model/Launch';

	const query = gql`
		{
			launches(limit: 1000, sort: "launch_date_utc", order: "desc") {
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
	{:then foo}
		<Grid>
			{#each foo.launches as launch}
				<LaunchCard {launch} />
			{/each}
		</Grid>
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
