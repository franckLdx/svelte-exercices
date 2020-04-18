<script context="module">
  import { checkRocketId } from "@Lib/check";
  import { getRocket as getRocketRequest } from "@Services/rockets";
  import { getRocketLaunches as getLaunchesRequest } from "@Services/launches";

  export async function preload(page) {
    const { id } = page.params;

    if (!checkRocketId(id)) {
      return this.error(400, "Bad parameters");
    }

    const [rocket, launches] = await Promise.all([
      getRocket(this.fetch, id),
      getLaunches(this.fetch, id)
    ]);
    return {
      rocket,
      launches
    };

    async function getRocket(fetch, id) {
      const rocket = await getRocketRequest(fetch, id);
      if (!rocket) {
        return this.error(404, `Found no rocket with id: ${id}`);
      }
      return rocket;
    }

    async function getLaunches(fetch, id) {
      const launches = await getLaunchesRequest(fetch, id);
      return launches || [];
    }
  }
</script>

<script>
  import HorizontalList from "@Components/HorizontalList.svelte";
  import Description from "./_rocket/Description.svelte";
  import Payload from "./_rocket/Payload.svelte";
  import FirstStage from "./_rocket/FirstStage.svelte";
  import SecondStage from "./_rocket/SecondStage.svelte";
  import Launches from "./_rocket/Launches.svelte";
  import { rocketsImage } from "@Lib/url";

  export let rocket;
  export let launches;
</script>

<svelte:head>
  <title>{rocket.name}</title>
</svelte:head>

<h1 class="title1 mb-5">{rocket.name}</h1>
<Description {rocket} />
<Payload {rocket} />
<FirstStage {rocket} />
<SecondStage {rocket} />
<Launches {launches} />
