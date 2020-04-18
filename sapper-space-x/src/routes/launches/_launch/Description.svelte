<script>
  import Link from "@Components/Link.svelte";
  import { distanceDate } from "@Lib/misc";

  let className = "";
  export { className as class };
  export let launch;
</script>

<div class={`${className} flex`}>
  {#if launch.links.mission_patch}
    <img
      class="w-40 object-scale-down mr-3"
      src={launch.links.mission_patch}
      alt="mission patch logo" />
  {/if}
  <div class="relative" style="top:0.3em">
    <div>
      {distanceDate(launch.launch_date_utc, new Date())} ago from {launch.launch_site.site_name_long}
    </div>
    <div class="mt-2">
      {#if launch.details}
        {launch.details} (
        <Link href={launch.links.wikipedia}>Related wikipedia article</Link>
        ,
        <Link href={launch.links.video_link}>Related video article</Link>
        )
      {:else}Sorry, description not yet provided !{/if}
    </div>
  </div>
</div>
