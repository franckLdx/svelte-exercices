<script context="module">
  import { getFirstRepositories } from "@Services/repositories";
  import { displayErrorPage } from "@Routes/Error.svelte";

  export async function preload() {
    const { nodes: repositories, pageInfo } = await getFirstRepositories(
      this.fetch
    );
    return { repositories, pageInfo };
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import Repository from "@Repositories/Repository.svelte";
  import Pagination from "@Pagination";
  import LoadingModal from "@Components/Loading.svelte";
  import {
    getPreviousRepositories,
    getNextRepositories,
    getLastRepositories
  } from "@Services/repositories";

  export let repositories;
  export let pageInfo;
  let isLoading = false;

  async function update(requestPromise) {
    try {
      isLoading = true;
      const result = await requestPromise;
      repositories = result.nodes;
      pageInfo = result.pageInfo;
      isLoading = false;
    } catch (err) {
      isLoading = true;
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

<LoadingModal open={isLoading} />
<div class="repositories row no-gutters">
  {#each repositories as repository (repository.id)}
    <div class="col-12 col-lg-6">
      <Repository class="repository-margin" {repository} />
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
