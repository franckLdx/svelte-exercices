<script lang="ts">
	import { MaterialApp } from "svelte-materialify";
	import AppHeader from "./components/AppHeader.svelte";
	import Departures from "./components/departures/Departures.svelte";
	import TrafficInfo from "./components/trafficInfo/TrafficInfo.svelte";
</script>

<main>
	<MaterialApp theme="dark">
		<AppHeader />
		<Departures />
		<TrafficInfo />
	</MaterialApp>
</main>
