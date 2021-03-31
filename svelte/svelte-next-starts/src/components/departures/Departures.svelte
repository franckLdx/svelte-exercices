<script lang="ts">
  import { departures } from "../../stores/departures";
  import Departure from "./Departure.svelte";
</script>

<section>
  {#if $departures.length === 0}
    <div class="text-overline mt-4 ml-4">
      Sélectionne une destination pour avoid les prochains départs
    </div>
  {:else}
    {#each $departures as departure (departure.station.name)}
      <div class="mt-4">
        <Departure {departure} />
      </div>
    {/each}
  {/if}
</section>
