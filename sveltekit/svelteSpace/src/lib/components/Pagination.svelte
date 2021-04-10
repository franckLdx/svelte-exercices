<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let pagesCount: number;
	$: pages = Array.from(Array(pagesCount).keys()).map((num) => num + 1);

	const dispatch = createEventDispatcher<{ page: number }>();

	const onClick = (pageNumber: number) => dispatch('page', pageNumber);
</script>

<div id="paginationContainer">
	{#each pages as p}
		<div id="button">
			<Button on:click={() => onClick(p)}>{p}</Button>
		</div>
	{/each}
</div>

<style lang="postcss">
	#paginationContainer {
		@apply mt-1;
		@apply border-t-2 border-component;
		@apply bg-container;
		@apply flex flex-wrap justify-center;
	}
	#button {
		@apply mx-1;
		@apply my-1;
	}
</style>
