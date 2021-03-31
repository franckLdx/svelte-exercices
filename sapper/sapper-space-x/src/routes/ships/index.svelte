<script context="module">
  import { getShips } from "@Services/ships";
  import { getShipsPageUrl, getShipUrl } from "@Lib/url";

  const pageSize = 9;

  export async function preload(page) {
    const currentPageNumber = page.query.page;
    if (currentPageNumber === undefined) {
      return this.redirect(302, getShipsPageUrl());
    }
    const { ships, totalCount } = await getShips(
      this.fetch,
      currentPageNumber,
      9
    );
    if (ships.length === 0) {
      return this.error(404, "Sorry, found no ships");
    }
    const lastPageNumber = Math.ceil(totalCount / pageSize);
    return { ships, currentPageNumber, lastPageNumber };
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import Grid from "@Components/Grid.svelte";
  import Ship from "./_Ship.svelte";

  export let ships;
  export let currentPageNumber;
  export let lastPageNumber;

  const onLoadShip = async ({ detail }) => await goto(getShipUrl(detail.id));

  const onLoadPage = async ({ detail }) =>
    await goto(getShipsPageUrl(detail.page));
</script>

<svelte:head>
  <title>Ships</title>
</svelte:head>

<Grid
  items={ships}
  {currentPageNumber}
  {lastPageNumber}
  let:prop={ship}
  on:loadItem={onLoadShip}
  on:loadPage={onLoadPage}>
  <Ship {ship} />
</Grid>
