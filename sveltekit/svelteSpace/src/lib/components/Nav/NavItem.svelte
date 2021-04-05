<script lang="ts">
	import { typos } from '../Typographie/tools';
	export let href: string;
</script>

<a class={typos.component} {href}><slot /></a>

<style lang="postcss">
	a {
		@apply bg-component;
		@apply px-2 py-1;
	}

	a:hover {
		@apply bg-component_hover;
		@apply ring-width-component ring-color-component;
	}
</style>
