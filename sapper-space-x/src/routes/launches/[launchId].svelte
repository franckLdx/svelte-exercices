<script context="module">
  import { getLaunch } from "@Services/launches";
  import { checkNumber } from "@Lib/check";

  export async function preload(page, session) {
    const { launchId } = page.params;
    if (!checkNumber(launchId)) {
      return this.error(400, "Bad parameters");
    }

    const launch = await getLaunch(this.fetch, launchId);
    if (!launch) {
      return this.error(404, `Sorry, found no launch wih id ${launchId}`);
    }
    return { launch };
  }
</script>

<script>
  import Thumbnails from "@Components/Thumbnails.svelte";
  import Ships from "@Components/Ships.svelte";
  import Description from "@Components/Description.svelte";
  import YouTubeReader from "@Components/YouTubeReader.svelte";

  export let launch;
</script>

<style>
  .launch :global(.images) {
    max-width: 30rem;
    max-height: 30rem;
  }
</style>

<svelte:head>
  <title>{launch.mission_name}</title>
</svelte:head>

<div class="launch mx-auto">
  <h1 class="font-serif text-4xl font-bold mb-10">
    {launch.mission_name} -- A {launch.rocket.rocket_name} mission
  </h1>
  <Description class="mb-10" {launch} />
  <Thumbnails
    class="ml-8 mb-10 images object-scale-down object-cover"
    thumbnails={launch.links.flickr_images} />
  <YouTubeReader
    class="ml-8 mb-10 border border-white"
    videoLink={launch.links.video_link} />
  <Ships class="ml-8" ships={launch.ships} />
</div>
