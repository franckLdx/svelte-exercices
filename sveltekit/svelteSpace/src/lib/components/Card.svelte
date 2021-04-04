<script lang="ts">
	import Image from './Image.svelte';
	import TextClamp from './TextClamp.svelte';

	export let title: string;
	export let imageRef: string | null;
	export let description: {
		text: string | null;
		clamp: number | undefined | null;
	};

	const alt = 'mission patch';
	$: descriptionContent = description.text ?? 'description not available';
</script>

<article>
	{title}
	<div class="h-3/5">
		<Image {alt} href={imageRef} />
	</div>
	<TextClamp text={descriptionContent} clamp={description.clamp} />
</article>

<style lang="postcss">
	article {
		@apply bg-component;
		@apply text-component font-component;
		@apply h-full w-full;
		@apply px-2 py-1;
	}
</style>
