<script>
  import Link from "@Components/Link.svelte";
  import { distanceDate } from "@Lib/misc";
  import MediaDescription from "@Components/MediaDescription.svelte";

  let className = "";
  export { className as class };
  export let launch;
</script>

<MediaDescription
  class={className}
  imgUrl={launch.links.mission_patch}
  altImg="mission patch logo">
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
</MediaDescription>
