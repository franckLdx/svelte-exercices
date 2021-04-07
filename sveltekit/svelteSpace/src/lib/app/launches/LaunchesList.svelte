<script lang="ts">
	import type { Launch } from 'src/model/Launch';
	import Grid from '$lib/components/Grid.svelte';
	import LaunchCard from '$lib/app/launches/LaunchCard.svelte';
	import LaunchPagination from '$lib/app/launches/LaunchPagination.svelte';

	export let launches: Launch[];
</script>

<Grid>
	{#each launches as launch}
		<LaunchCard {launch} />
	{/each}
</Grid>
<LaunchPagination />
