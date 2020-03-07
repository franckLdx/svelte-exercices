<script>
  import { createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  import PageItem from "@Components/Pagination/PageItem.svelte";
  import Language from "@Components/Language.svelte";
  import { getURL } from "@Repositories/repository.svelte";

  const dispatch = createEventDispatcher();

  export let repository;
  let className = "";
  export { className as class };

  async function onLoad() {
    dispatch("loading");
    const repositoryURL = getURL(repository.name, repository.owner.login);
    await goto(repositoryURL);
  }
</script>

<style>
  .star {
    line-height: 1.8rem;
  }
</style>

<article class={`card ${className}`}>
  <div class="card-header d-flex justify-content-between">
    <nav aria-label="Page navigation ">
      <ul class="pagination m-0">
        <PageItem aria-label="go to first page" on:click={onLoad}>
          {repository.name}
        </PageItem>
      </ul>
    </nav>
    <span class="star badge badge-warning pl-2 pr-2">
      Stars: {repository.stargazers.totalCount}
    </span>
  </div>
  <div class="card-body">{repository.description}</div>
  <div class="card-footer">
    {#each repository.languages.nodes as language (language.name)}
      <Language class="mr-3" {language} />
    {/each}
  </div>
</article>

<svelte:options immutable />
