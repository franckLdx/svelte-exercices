<script>
  import { createEventDispatcher } from "svelte";
  import { distanceDate } from "@Lib/misc";
  import Thumbnails from "@Components/Thumbnails.svelte";
  import { stores } from "@sapper/app";

  export let launch;

  const { preloading } = stores();

  const dispatch = createEventDispatcher();

  const now = new Date();

  function onClick() {
    dispatch("click");
  }
  $: cursor = $preloading ? "cusrsor-wait" : "cursor-pointer";
</script>

<article
  class={`border border-gray-400 rounded px-3 pb-1 hover:opacity-75 ${cursor}`}
  on:click={() => onClick()}>
  <h1 class="font-serif text-2xl font-semibold">
    {launch.mission_name} -- {launch.rocket.rocket_name}
  </h1>
  <span class="text-gray-200">
    {distanceDate(launch.launch_date_utc, now)} ago from {launch.launch_site.site_name_long}
  </span>
  <Thumbnails
    class="h-64 w-64 mx-auto mt-2 mb-2 object-scale-down"
    thumbnails={launch.links.flickr_images} />
</article>
