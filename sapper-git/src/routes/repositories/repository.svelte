<script context="module">
  import { getRepository } from "@Services/repository";
  import { getLastCommit } from "@Services/commit";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import Folder from "@Repositories/_Folder.svelte";

  export function getURL(name, login) {
    return `/repositories/repository?name=${name}&owner=${login}`;
  }

  const validator = RegExp(/^[\w\-]{1,100}$/);

  export async function preload(page) {
    const { name, owner } = page.query;
    if (!name || !validator.test(name) || !owner || !validator.test(owner)) {
      return this.error(400, "Bad parameters");
    }
    const repository = await getRepository(this.fetch, name, owner);
    const loading = [];
    for (const entry of repository.object.entries) {
      const loadCommit = getLastCommit(
        this.fetch,
        name,
        owner,
        entry.name
      ).then(commit => (entry.commit = commit.object.history.nodes[0]));
      loading.push(loadCommit);
    }
    await Promise.all(loading);
    return {
      repository
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
    <Folder entries={repository.object.entries} />
  </div>
</article>
