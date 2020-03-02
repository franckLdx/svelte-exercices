<script context="module">
  import { getRepository } from "@Services/repository";
  import { displayErrorPage } from "@Routes/Error.svelte";

  export async function preload() {
    return {
      repository: await getRepository(this.fetch, "ts-retry", "franckLdx")
    };
  }
</script>

<script>
  export let repository;
</script>

<article class="card">
  <div class="card-header">
    <p class="h1 mb-4">{repository.name}</p>
    <p class="h4 mb-3">{repository.description}</p>
    <p>
      <span class="mr-5">License: {repository.licenseInfo.name}</span>
      Watchers: {repository.watchers.totalCount}
    </p>
  </div>
  <div class="card-body" />
</article>
