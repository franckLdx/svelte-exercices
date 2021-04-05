<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { request, gql } from 'graphql-request/dist';

	interface Id {
		mission_id: string;
	}

	const query = gql`
		{
			launches(limit: 1000000) {
				mission_id
			}
		}
	`;

	const pageCountP: Promise<number> = request<{ launches: Id[] }>(
		'https://api.spacex.land/graphql',
		query
	).then((result) => Math.ceil(result.launches.length / 10));
</script>

{#await pageCountP}
	<p>...waiting</p>
{:then count}
	<div class="bg-red-300">
		Pages count: {count}
		<Button>1</Button>
		<Button>2</Button>
		<Button>3</Button>
	</div>
{/await}
