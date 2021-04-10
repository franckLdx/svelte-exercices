<script lang="ts">
	import { page } from '$app/stores';
	import { getNumberQueryParameter } from '$lib/queryParameters';
	import LaunchesList from '$lib/app/launches/LaunchesList.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import LaunchPagination from '$lib/app/launches/LaunchPagination.svelte';
	import launchesStore from '$lib/app/launches/LaunchesStore';

	const pageKey = 'page';
	const limitKey = 'limit';

	$: pageNumber = getNumberQueryParameter($page.query, pageKey) ?? 1;
	$: limit = getNumberQueryParameter($page.query, limitKey) ?? 10;
	$: launchesStore.setLimit(limit);
	$: loading = launchesStore.loadPage(pageNumber);
</script>

<div id="container">
	{#await loading}
		<div id="loading"><Loading /></div>
	{:then _launchesResult}
		<LaunchesList {pageNumber} />
	{:catch error}
		BOOM
	{/await}
	<LaunchPagination />
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
