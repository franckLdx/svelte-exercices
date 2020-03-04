<script context="module">
  import { getRepository } from "@Services/repository";
  import { displayErrorPage } from "@Routes/Error.svelte";

  export async function preload(page) {
    const { name, owner } = page.query;
    return {
      repository: await getRepository(this.fetch, name, owner)
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
      <span class="mr-5">
        License: {repository.licenseInfo ? repository.licenseInfo.name : 'Not defined'}
      </span>
      <span class="mr-5">Watchers: {repository.watchers.totalCount}</span>
      <span>Stars: {repository.stargazers.totalCount}</span>
    </p>
  </div>
  <div class="card-body">
    <p>
      {#each repository.object.entries as entry (entry.oid)}
        {entry.name} ({entry.type} )
        <br />
      {/each}
    </p>
  </div>
</article>
