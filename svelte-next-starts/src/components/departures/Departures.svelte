<script lang="ts">
  import { departures } from "../../stores/departures";
  import Departure from "./Departure.svelte";
</script>

{#each $departures as departure (departure.station.name)}
  <Departure {departure} />
{/each}
