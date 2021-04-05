<script lang="ts">
	import Image from './Image.svelte';
	import Typographie from './Typographie/Typographie.svelte';

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
	<Typographie typo="component-header" text={title} clamp={1} />
	<div class="h-3/5">
		<Image {alt} href={imageRef} />
	</div>
	<Typographie typo="component" text={descriptionContent} clamp={description.clamp} />
</article>

<style lang="postcss">
	article {
		@apply rounded-md;
		@apply bg-component;
		@apply h-full w-full;
		@apply px-2 py-1;
	}
</style>
