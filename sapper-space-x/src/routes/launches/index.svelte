<script context="module">
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { getLaunches } from "@Services/launches";
  import { checkNumber } from "@Lib/check";
  import { getLaunchesPageUrl } from "@Lib/url";

  const pageSize = 9;

  export async function preload(page) {
    const currentPageNumber = page.query.page;
    if (currentPageNumber === undefined) {
      return this.redirect(302, getLaunchesPageUrl());
    }
    if (!checkNumber(currentPageNumber)) {
      return this.error(400, "Bad parameters");
    }
    const { launches, totalCount } = await getLaunches(
      this.fetch,
      currentPageNumber,
      pageSize
    );
    const lastPageNumber = Math.ceil(totalCount / pageSize);
    return {
      launches,
      currentPageNumber,
      lastPageNumber
    };
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { getLaunchUrl } from "@Lib/url";
  import Launch from "./_Launch.svelte";
  import Grid from "@Components/Grid.svelte";

  export let launches;
  export let currentPageNumber;
  export let lastPageNumber;

  $: onLoadPage = async ({ detail }) =>
    await goto(getLaunchesPageUrl(detail.page));

  const onLoadLaunch = async ({ detail }) =>
    await goto(getLaunchUrl(detail.id));
</script>

<svelte:head>
  <title>Launches</title>
</svelte:head>

<Grid
  items={launches}
  {currentPageNumber}
  {lastPageNumber}
  let:prop={launch}
  on:loadItem={onLoadLaunch}
  on:loadPage={onLoadPage}>
  <Launch {launch} />
</Grid>
