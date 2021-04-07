<script lang="ts">
	import type { ElementType } from '../elements';

	import { getClamp, getTypo } from './tools';

	export let text: string;
	export let clamp: number = 0;
	export let elementType: ElementType;

	$: classes = `${getTypo(elementType)} ${getClamp(clamp)}`;
</script>

<div class={classes}>{text}</div>
