<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	export let pagesCount: number;
	$: pages = Array.from(Array(pagesCount).keys());
</script>

<div id="paginationContainer">
	{#each pages as p}
		<div id="button">
			<Button>{p}</Button>
		</div>
	{/each}
</div>

<style lang="postcss">
	#paginationContainer {
		@apply mt-1;
		@apply pt-1;
		@apply pb-1;
		@apply border-t-2 border-component;
		@apply bg-container;
		@apply flex flex-wrap justify-center;
	}
	#button {
		@apply mx-1;
	}
</style>
