<script context="module">
  import { getFirstRepositories } from "../services/repositories";

  export async function preload() {
    const { nodes: repositories, pageInfo } = await getFirstRepositories(
      this.fetch
    );
    return { repositories, pageInfo };
  }
</script>

<script>
  import Repository from "./_Repository.svelte";
  import Pagination from "@Pagination";
  import {
    getPreviousRepositories,
    getNextRepositories,
    getLastRepositories
  } from "@Services/repositories";

  export let repositories;
  export let pageInfo;

  async function update(requestPromise) {
    const result = await requestPromise;
    repositories = result.nodes;
    pageInfo = result.pageInfo;
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
