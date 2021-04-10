<script context="module" lang="ts">
	import { getLaucnhesUrl } from '$lib/app/routes';

	import type { LoadOutput } from '@sveltejs/kit/types.internal';

	export function load(): LoadOutput {
		return {
			status: 302,
			redirect: getLaucnhesUrl()
		};
	}
</script>
