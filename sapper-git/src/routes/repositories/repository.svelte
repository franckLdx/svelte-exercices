<script context="module">
  import { getRepository } from "@Services/repository";
  import { displayErrorPage } from "@Routes/Error.svelte";

  export function getURL(name, login) {
    return `/repositories/repository?name=${name}&owner=${login}`;
  }

  export async function preload(page) {
    const { name, owner } = page.query;
    return {
      repository: await getRepository(this.fetch, name, owner)
    };
  }
</script>

<script>
  import Language from "@Components/Language.svelte";
  export let repository;
</script>

<style>
  .card-body :global(.add-margin) {
    margin-right: 20px;
  }
  .item:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 10px 5px 15px;
    background-color: aqua;
  }
</style>

<article class="card">
  <div class="card-header mb-0">
    <p class="h1 mb-4">{repository.name}</p>
    <p class="h4 mb-3">{repository.description}</p>
    <p class="m-0">
      <span class="mr-5">
        License: {repository.licenseInfo ? repository.licenseInfo.name : 'Not defined'}
      </span>
      <span class="mr-5">Watchers: {repository.watchers.totalCount}</span>
      <span>Stars: {repository.stargazers.totalCount}</span>
    </p>
  </div>
  <div class="card-body pt-2 pl-3 pr-3">
    <div class="border border-dark p-2 mb-3">
      {#each repository.languages.nodes as language (language.name)}
        <Language class="add-margin" {language} />
      {/each}
    </div>
    <div class="border border-dark pt-2 pl-2 pr-2 mb-2">
      {#each repository.object.entries as entry (entry.oid)}
        <div class="item border border-dark mb-2 p-2">{entry.name}</div>
      {/each}
    </div>
  </div>
</article>
