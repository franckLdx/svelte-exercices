<script lang="ts">
	import type { Launch } from 'src/model/Launch';
	import Card from '$lib//components/Card.svelte';
	export let launch: Launch;
</script>

<Card
	title={launch.mission_name}
	imageRef={launch.links.mission_patch_small}
	description={{ text: launch.details, clamp: 9 }}
/>
