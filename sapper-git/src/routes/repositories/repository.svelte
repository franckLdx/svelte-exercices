<script context="module">
  import { getRepository } from "@Services/repository";
  import { getEntriesWhithCommit } from "@Services/commit";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import Folder from "@Repositories/_Folder.svelte";
  import { checkRepository, checkOwner } from "@Lib/verify";

  export async function preload(page, session) {
    const { repositoryName, owner } = page.query;
    if (!checkRepository(repositoryName) || !checkRepository(owner)) {
      return this.error(400, "Bad parameters");
    }
    const { object, ...repositoryInfo } = await getRepository(
      this.fetch,
      repositoryName,
      owner
    );
    const entries = await getEntriesWhithCommit({
      fetch: this.fetch,
      entries: object.entries,
      parentPath: undefined,
      repositoryName,
      owner
    });

    return {
      owner,
      repositoryInfo,
      entries
    };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import Language from "@Components/Language.svelte";
  import Loading from "@Components/Loading.svelte";
  import History from "@Components/History.svelte";
  import { getRepositoryURL } from "@Lib/url";

  export let owner;
  export let repositoryInfo;
  export let entries;

  const { session } = stores();

  let isLoading = false;
  function onLoading() {
    isLoading = true;
  }
</script>

<style>
  .card-body :global(.add-margin) {
    margin-right: 20px;
  }
</style>

<Loading {isLoading} />
<History history={session.history} on:loading={onLoading} />
<article class="card">
  <div class="card-header mb-0">
    <p class="h1 mb-4">{repositoryInfo.name}</p>
    <p class="h4 mb-3">{repositoryInfo.description}</p>
    <p class="m-0">
      <span class="mr-5">
        License: {repositoryInfo.licenseInfo ? repositoryInfo.licenseInfo.name : 'Not defined'}
      </span>
      <span class="mr-5">Watchers: {repositoryInfo.watchers.totalCount}</span>
      <span>Stars: {repositoryInfo.stargazers.totalCount}</span>
    </p>
  </div>
  <div class="card-body pt-2 pl-3 pr-3">
    <div class="border border-dark p-2 mb-3">
      {#each repositoryInfo.languages.nodes as language (language.name)}
        <Language class="add-margin" {language} />
      {/each}
    </div>
    <Folder
      {owner}
      repositoryName={repositoryInfo.name}
      parentPath={null}
      folderName={null}
      {entries}
      on:loading={onLoading} />
  </div>
</article>

<svelte:options immutable />
