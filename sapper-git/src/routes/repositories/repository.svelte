<script context="module">
  import { getRepository } from "@Services/repository";
  import { getEntriesWhithCommit } from "@Services/commit";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import Folder from "@Repositories/_Folder.svelte";
  import { checkRepository, checkOwner } from "@Lib/verify";

  export async function preload(page) {
    const { repository: repositoryName, owner } = page.query;
    if (!checkRepository(repositoryName) || !checkRepository(owner)) {
      return this.error(400, "Bad parameters");
    }
    const repository = await getRepository(this.fetch, repositoryName, owner);
    repository.object.entries = await getEntriesWhithCommit({
      fetch: this.fetch,
      entries: repository.object.entries,
      parentPath: undefined,
      repositoryName,
      owner
    });

    return {
      repositoryName,
      owner,
      repository
    };
  }
</script>

<script>
  import Language from "@Components/Language.svelte";
  import Loading from "@Components/Loading.svelte";
  import History from "@Components/History.svelte";
  import { addItem } from "@Lib/history";
  import { getRepositoryURL } from "@Lib/url";

  export let repository;
  export let repositoryName;
  export let owner;

  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();

  let isLoading = false;
  function onLoading() {
    isLoading = true;
  }
  $session.history = addItem(
    $session.history,
    repositoryName,
    getRepositoryURL($page.query.repository, $page.query.owner)
  );
</script>

<style>
  .card-body :global(.add-margin) {
    margin-right: 20px;
  }
</style>

<Loading {isLoading} />
<History history={$session.history} on:loading={onLoading} />
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
    <Folder
      {owner}
      {repositoryName}
      parentPath={null}
      folderName={null}
      entries={repository.object.entries}
      on:loading={onLoading} />
  </div>
</article>

<svelte:options immutable />
