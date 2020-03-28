<script context="module">
  import Launch from "@Components/Launch.svelte";
  import NavPage from "@Components/navPage/NavPage.svelte";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { getLaunchesPast, getLastLaunchesCount } from "@Services/launches";
  import { checkNumber } from "@Lib/check";

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
    return {
      launches: await getLaunchesPast(this.fetch, pageNumber, 9),
      page: pageNumber,
      lastPage
    };
  }
</script>

<script>
  export let launches;
  export let page;
  export let lastPage;
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pb-4">
  {#each launches as launch (launch.id)}
    <Launch {launch} />
  {/each}
</section>

<NavPage {page} {lastPage} on:page={({ detail }) => console.log(detail.page)} />
