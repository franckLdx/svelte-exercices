<script lang="ts">
	import type { Typo } from './tools';
	import { getClamp, getTypo } from './tools';

	export let text: string;
	export let clamp: number = 0;
	export let typo: Typo;

	$: classes = `${getTypo(typo)} ${getClamp(clamp)}`;
</script>

<div class={classes}>{text}</div>
