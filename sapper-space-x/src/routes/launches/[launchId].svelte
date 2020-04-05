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
  import { distanceDate } from "@Lib/misc";

  export let launch;
</script>

<h1 class="font-serif text-4xl font-bold mb-10">
  {launch.mission_name} -- A {launch.rocket.rocket_name} mission
</h1>
<Description class="mb-10" {launch} />
<Thumbnails class="mb-10" thumbnails={launch.links.flickr_images} />
<Ships ships={launch.ships} />
