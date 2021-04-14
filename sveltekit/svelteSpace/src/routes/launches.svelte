<script lang="ts">
	import { page } from '$app/stores';
	import LaunchesList from '$lib/app/launches/LaunchesList.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import LaunchPagination from '$lib/app/launches/LaunchPagination.svelte';
	import launchesStore from '$lib/app/launches/LaunchesStore';
	import { getLauchParameters } from '$lib/app/launches/launchRoutes';

	$: parameters = getLauchParameters($page.query);
	$: launchesStore.setLimit(parameters.limit);
	$: loading = launchesStore.loadPage(parameters.pageNumber);
</script>

<div id="container">
	{#await loading}
		<div id="loading"><Loading /></div>
	{:then _launchesResult}
		<LaunchesList pageNumber={parameters.pageNumber} />
	{:catch error}
		BOOM
	{/await}
	<LaunchPagination currentPageNumber={parameters.pageNumber} />
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
