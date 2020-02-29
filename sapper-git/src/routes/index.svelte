<script context="module">
  import { getRepositories } from "../services/repositories";

  export async function preload() {
    const { nodes: repositories, pageInfo, totalCount } = await getRepositories(
      this.fetch
    );
    return { repositories, pageInfo, totalCount };
  }
</script>

<script>
  import Repository from "./_Repository.svelte";
  import Pages from "./_Pages.svelte";

  export let repositories;
  export let pageInfo;
  export let totalCount;
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
<Pages {totalCount} {pageInfo} activePage={1} />

<svelte:options immutable />
