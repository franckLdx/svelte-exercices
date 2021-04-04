<script lang="ts">
	export let href: string;
	export let alt: string;
</script>

<img src={href} {alt} loading="lazy" />

<style lang="postcss">
	img {
		@apply h-full w-full;
		@apply object-scale-down;
	}
</style>
