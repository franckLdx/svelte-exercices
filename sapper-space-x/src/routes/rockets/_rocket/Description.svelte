<script>
  export let rocket;
</script>

{rocket.description}
<br />
A launch costs {rocket.cost_per_launch}$
{#if rocket.success_rate_pct > 0}
  and the success rate is around {rocket.success_rate_pct}%
{/if}
<br />
With a height of {rocket.height.meters}m and a diameter of {rocket.diameter.meters}m
for a mass of {rocket.mass.kg}kg.
