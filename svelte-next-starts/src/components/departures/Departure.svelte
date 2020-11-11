<script lang="ts">
  import type { Departure } from "../../models/departure";

  export let departure: Departure;
</script>

<article>
  {departure.station.name}
  -
  {departure.line.type}
  {departure.line.code}<br />
  {departure.schedules[0]}
</article>
