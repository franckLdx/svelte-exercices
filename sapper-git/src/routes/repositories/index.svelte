<script context="module">
  import { getFirstRepositories } from "@Services/repositories";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { addItem } from "@Lib/history";
  import { getRepositoriesURL } from "@Lib/url";

  export async function preload(page, session) {
    const { nodes: repositories, pageInfo } = await getFirstRepositories(
      this.fetch
    );
    session.history = addItem(
      session.history,
      "Repositories",
      getRepositoriesURL()
    );
    return { repositories, pageInfo, isLoading: false };
  }
</script>

<script>
  import Loading from "@Components/Loading.svelte";
  import Repository from "@Components/Repository.svelte";
  import Pagination from "@Pagination";
  import {
    getPreviousRepositories,
    getNextRepositories,
    getLastRepositories
  } from "@Services/repositories";

  export let repositories;
  export let pageInfo;
  export let isLoading = false;

  async function update(requestPromise) {
    try {
      isLoading = true;
      const result = await requestPromise;
      repositories = result.nodes;
      pageInfo = result.pageInfo;
      isLoading = false;
    } catch (err) {
      isLoading = false;
      displayErrorPage(err);
    }
  }

  async function onFirstPage() {
    const request = getFirstRepositories(fetch);
    await update(request);
  }

  async function onPreviousPage() {
    const request = getPreviousRepositories(fetch, pageInfo.startCursor);
    await update(request);
  }

  async function onNextPage() {
    const request = getNextRepositories(fetch, pageInfo.endCursor);
    await update(request);
  }

  async function onLastPage() {
    const request = getLastRepositories(fetch);
    await update(request);
  }

  function onLoading() {
    isLoading = true;
  }
</script>

<style>
  div :global(.repository-margin) {
    margin: 10px;
    height: calc(100% - 15px);
  }
  .repositories {
    margin-bottom: 20px;
  }
</style>

<Loading {isLoading} />
<div class="repositories row no-gutters">
  {#each repositories as repository (repository.id)}
    <div class="col-12 col-lg-6">
      <Repository
        class="repository-margin"
        on:loading={onLoading}
        {repository} />
    </div>
  {/each}
</div>
<Pagination
  hasPreviousPage={pageInfo.hasPreviousPage}
  hasNextPage={pageInfo.hasNextPage}
  on:firstPage={onFirstPage}
  on:previousPage={onPreviousPage}
  on:nextPage={onNextPage}
  on:lastPage={onLastPage} />

<svelte:options immutable />
