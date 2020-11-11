<script lang="ts">
	import { MaterialApp } from "svelte-materialify";
	import AppHeader from "./components/AppHeader.svelte";
	import Departures from "./components/departures/Departures.svelte";
	import TrafficInfo from "./components/trafficInfo/TrafficInfo.svelte";

	let height;
	let style;
	$: style = `height: ${height - 10}px`;
</script>

<style>
	.departures {
		min-height: 150px;
		height: 75%;
		border-bottom: solid #32a1ce;
	}
</style>

<svelte:window bind:innerHeight={height} />

<main>
	<MaterialApp theme="dark">
		<div class="flex-column" {style}>
			<AppHeader />
			<div class="departures">
				<Departures />
			</div>
			<TrafficInfo />
		</div>
	</MaterialApp>
</main>
