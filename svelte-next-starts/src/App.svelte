<script lang="ts">
	import { MaterialApp } from "svelte-materialify";
	import AppHeader from "./components/AppHeader.svelte";
	import Destinations from "./components/destinations/Destinations.svelte";
	import TrafficInfo from "./components/trafficInfo/TrafficInfo.svelte";
</script>

<main>
	<MaterialApp theme="dark">
		<AppHeader />
		<Destinations />
		<TrafficInfo />
	</MaterialApp>
</main>
