<script context="module">
  import { checkRocketId } from "@Lib/check";
  import { getRocket } from "@Services/rockets";

  export async function preload(page) {
    const { id } = page.params;

    if (!checkRocketId(id)) {
      return this.error(400, "Bad parameters");
    }

    const rocket = await getRocket(this.fetch, id);
    if (!rocket) {
      return this.error(404, `Found no rocket with id: ${id}`);
    }
    return {
      rocket
    };
  }
</script>

<script>
  import HorizontalList from "@Components/HorizontalList.svelte";
  import Description from "./_rocket/Description.svelte";
  import Payload from "./_rocket/Payload.svelte";
  import FirstStage from "./_rocket/FirstStage.svelte";
  import SecondStage from "./_rocket/SecondStage.svelte";

  export let rocket;
</script>

<h1 class="title1 mb-5">{rocket.name}</h1>
<Description {rocket} />
<Payload {rocket} />
<FirstStage {rocket} />
<SecondStage {rocket} />
