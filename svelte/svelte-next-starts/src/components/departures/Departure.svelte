<script lang="ts">
  import { Card, CardTitle, CardSubtitle } from "svelte-materialify/src";
  import type { Departure } from "../../models/departure";
  import type { LineType } from "../../models/line";

  export let departure: Departure;

  const typeToLabel: Record<LineType, string> = {
    metros: "Metro",
    rers: "Rer",
    tramways: "Tramway",
    buses: "Bus",
    noctiliens: "Noctilien",
  };
</script>

<Card class="ml-2 mr-2">
  <CardTitle>
    {departure.station.name}:
    {departure.schedules[0]}
    --
    {typeToLabel[departure.line.type]}
    {departure.line.code}
  </CardTitle>
  <CardSubtitle />
</Card>
