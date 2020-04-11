<script context="module">
  import Launch from "@Components/Launch.svelte";
  import NavPage from "@Components/navPage/NavPage.svelte";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { getLaunchesPast, getLastLaunchesCount } from "@Services/launches";
  import { checkNumber } from "@Lib/check";
  import { loadingStore } from "@Lib/store";

  const pageSize = 9;
  export async function preload(page) {
    const pageNumber = page.query.page || 1;
    let lastPage = page.query.lastPage;
    if (lastPage === undefined) {
      const total = await getLastLaunchesCount(this.fetch);
      lastPage = Math.ceil(total / pageSize);
    }
    if (!checkNumber(pageNumber) || !checkNumber(lastPage)) {
      return this.error(400, "Bad parameters");
    }
    const launches = await getLaunchesPast(this.fetch, pageNumber, 9);
    loadingStore.setLoading(false);
    return {
      launches,
      page: pageNumber,
      lastPage
    };
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { getPastLaunchesURL, getLaunchURL } from "@Lib/url";

  export let launches;
  export let page;
  export let lastPage;

  async function loadPage(newPage) {
    loadingStore.setLoading(true);
    await goto(getPastLaunchesURL(newPage, lastPage));
  }

  async function loadLaunch(launchId) {
    loadingStore.setLoading(true);
    await goto(getLaunchURL(launchId));
  }
</script>

<svelte:head>
  <title>Past Launches</title>
</svelte:head>

<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pb-4">
  {#each launches as launch (launch.id)}
    <Launch {launch} on:click={() => loadLaunch(launch.id)} />
  {/each}
</section>

<NavPage
  {page}
  {lastPage}
  on:page={async ({ detail }) => await loadPage(detail.page)} />
