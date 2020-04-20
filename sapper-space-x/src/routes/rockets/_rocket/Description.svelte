<script>
  import Link from "@Components/Link.svelte";
  import MediaDescription from "@Components/MediaDescription.svelte";
  import { rocketsImage } from "@Lib/url";

  export let rocket;
  let className = "";
  export { className as class };

  $: imgUrl = rocketsImage[rocket.id];
  $: altImg = `A ${rocket.name} image`;
</script>

<MediaDescription class={className} {imgUrl} {altImg}>
  <div class="mb-3">
    {rocket.description} (
    <Link href={rocket.wikipedia}>Related wikipedia article</Link>
    )
  </div>
  <div class="mb-3">
    A launch costs {rocket.cost_per_launch}$
    {#if rocket.success_rate_pct > 0}
      and the success rate is around {rocket.success_rate_pct}%
    {/if}
  </div>
  Has a height of {rocket.height.meters}m and a diameter of {rocket.diameter.meters}m
  for a mass of {rocket.mass.kg}kg.
</MediaDescription>
