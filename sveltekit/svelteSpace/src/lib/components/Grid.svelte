<section><slot /></section>

<style lang="postcss">
	section {
		@apply bg-container;
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5;
		@apply gap-2 xl:gap-3 p-2 xl:p-3;
		@apply h-full;
	}
</style>
