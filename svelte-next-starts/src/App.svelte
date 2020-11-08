<script lang="ts">
	import { MaterialApp } from "svelte-materialify";
	import Destinations from "./destinations/Destinations.svelte";
	import TrafficInfo from "./trafficInfo/TrafficInfo.svelte";
</script>

<main>
	<MaterialApp theme="dark">
		<Destinations />
		<TrafficInfo />
	</MaterialApp>
</main>
