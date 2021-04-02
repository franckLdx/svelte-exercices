<button class="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
	><slot /></button
>

<style lang="postcss">
	button {
		@apply px-3 py-1;
		@apply text-primary-100 font-bold;
		@apply bg-primary-200;
		@apply rounded-3xl outline-none;
	}

	button:hover {
		@apply bg-primary_hover-100;
	}

	button:focus {
		@apply outline-none ring-4 ring-opacity-50;
	}
</style>
