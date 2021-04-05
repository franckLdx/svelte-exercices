<script lang="ts">
	import { typos } from './Typographie/tools';
</script>

<button class={typos.component}><slot /></button>

<style>
	button {
		@apply bg-component;
		@apply px-3 py-1;
		@apply rounded-3xl outline-none;
	}
</style>
