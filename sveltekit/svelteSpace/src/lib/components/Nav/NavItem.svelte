<script lang="ts">
	export let href: string;
</script>

<a {href}><slot /></a>

<style lang="postcss">
	a {
		@apply bg-component;
		@apply text-component font-component;
		@apply px-2 py-1;
	}

	a:hover {
		@apply bg-component_hover;
		@apply ring-width-component ring-color-component;
	}
</style>
