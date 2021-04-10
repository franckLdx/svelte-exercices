<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import LaunchCard from '$lib/app/launches/LaunchCard.svelte';
	import launchesStore from './LaunchesStore';

	export let pageNumber: number;
	$: launchesData = $launchesStore;
	$: launches = launchesData.launches[pageNumber];
</script>

<Grid>
	{#each launches as launch}
		<LaunchCard {launch} />
	{/each}
</Grid>
