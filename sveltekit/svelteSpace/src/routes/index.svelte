<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit/types.internal';

	export function load(): LoadOutput {
		return {
			status: 302,
			redirect: `launches`
		};
	}
</script>
