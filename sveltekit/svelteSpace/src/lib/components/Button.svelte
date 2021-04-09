<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = (e) => {
		dispatch('click', e);
	};
</script>

<button on:click={onClick}><slot /></button>

<style>
	button {
		@apply bg-component text-component;
		@apply px-3 py-1;
		@apply rounded-3xl outline-none;
	}
</style>
