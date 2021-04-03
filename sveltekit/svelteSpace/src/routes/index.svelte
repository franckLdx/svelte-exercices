<script lang="ts">
	import LaunchScreen from '$lib/components/launches/LaunchScreen.svelte';
	import { request, gql } from 'graphql-request/dist';
	import type { Launch } from 'src/model/Launch';

	const query = gql`
		{
			launchesPast(limit: 10) {
				mission_name
			}
		}
	`;

	const result = request<{ launchesPast: Launch[] }>('https://api.spacex.land/graphql', query);
</script>

<div>
	{#await result}
		<p>...waiting</p>
	{:then foo}
		{#each foo.launchesPast as launch}
			<LaunchScreen {launch} />
		{/each}
	{:catch error}
		BOOM
	{/await}
</div>

<style lang="postcss">
	div {
		@apply bg-container;
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5;
	}
</style>
