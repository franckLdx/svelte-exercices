<script>
  import { distanceDate } from "@Lib/misc";

  let className;
  export { className as class };
  export let launch;
</script>

<div class={`${className} flex`}>
  <img
    class="w-40 object-scale-down mr-3"
    src={launch.links.mission_patch}
    alt="mission patch logo" />
  <div class="relative" style="top:0.3em">
    <div>
      {distanceDate(launch.launch_date_utc, new Date())} ago from {launch.launch_site.site_name_long}
    </div>
    <div class="mt-2">
      {launch.details} (
      <a href={launch.links.wikipedia}>Related wikipedia article</a>
      )
    </div>
  </div>
</div>
