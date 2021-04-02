<script lang="ts">
	export let href: string;
</script>

<a {href}><slot /></a>

<style lang="postcss">
	a {
		@apply bg-primary-200;
		@apply text-primary-100 font-bold;
		@apply px-2 py-1;
	}

	a:hover {
		@apply bg-primary_hover-100;
		@apply ring-2 ring-primary-100;
	}
</style>
