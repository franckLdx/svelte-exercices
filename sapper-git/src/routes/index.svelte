<script context="module">
  import { getRepositories } from "../services/repositories";

  export async function preload() {
    return { repositories: await getRepositories(this.fetch) };
  }
</script>

<script>
  import Repository from "./_Repository.svelte";
  export let repositories;
</script>

<style>
  div :global(.repository-margin) {
    margin: 10px;
    height: calc(100% - 15px);
  }
</style>

<div class="row no-gutters">
  {#each repositories as repository}
    <div class="col-12 col-lg-6">
      <Repository class="repository-margin" {repository} />
    </div>
  {/each}
</div>
