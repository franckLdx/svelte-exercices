<script lang="ts">
	export let text: string;
	export let clamp: number | undefined | null;

	$: classe = clamp ? `line-clamp-${clamp}` : 'line-clamp-none';
</script>

<div class={classe}>{text}</div>
