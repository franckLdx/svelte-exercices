<script context="module">
  import { getShip } from "@Services/ships";
  import { checkShipId } from "@Lib/check";
  import HorizontalList from "@Components/HorizontalList.svelte";

  export async function preload(page) {
    const id = page.params.id;
    if (!checkShipId(id)) {
      return this.error(400, "Bad parameters");
    }
    const ship = await getShip(this.fetch, id);
    if (!ship) {
      return this.error(404, `Found no ship with id ${id}`);
    }
    return { ship };
  }
</script>

<script>
  import { getLaunchUrl } from "@Lib/url";
  import Link from "@Components/Link.svelte";

  export let ship;
</script>

<h1 class="title1 mb-10">{ship.name} -- A {ship.type} of {ship.year_built}</h1>
<img src={ship.image} alt={`A ${ship.name} photo`} />
<HorizontalList
  items={[{ Roles: ship.roles }, { 'Home port': ship.home_port }]} />
{#if ship.weight_kg}
  <HorizontalList items={[{ Weight: `${ship.weight_kg}kg` }]} />
{/if}
Launches
<ol class="list-disc list-inside">
  {#each ship.missions as mission (mission.flight)}
    <li>
      <Link href={getLaunchUrl(mission.flight)}>{mission.name}</Link>
    </li>
  {/each}
</ol>
