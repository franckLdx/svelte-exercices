<script lang="ts">
	import type { Launch } from 'src/model/Launch';

	export let launch: Launch;
</script>

<div>{launch.mission_name}</div>

<style lang="postcss">
	div {
		@apply bg-component;
		@apply text-component font-component;
		@apply m-2;
	}
</style>
