<script>
  import { formatDistance, parseISO } from "date-fns";
  import Thumbnails from "@Components/Thumbnails.svelte";

  export let launch;

  const now = new Date();
  function distanceDate(date) {
    const actualDate = parseISO(date);
    return formatDistance(actualDate, now);
  }
</script>

<article class="border border-gray-400 rounded px-3 pb-1">
  <h1 class="font-serif text-2xl font-semibold text-white">
    {launch.mission_name} -- {launch.rocket.rocket_name}
  </h1>
  <span class="text-gray-200">
    {distanceDate(launch.launch_date_utc)} ago from {launch.launch_site.site_name_long}
  </span>
  <Thumbnails
    class="h-64 w-64 mx-auto mt-2 mb-2"
    thumbnails={launch.links.flickr_images} />
</article>
