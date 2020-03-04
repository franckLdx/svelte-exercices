<script>
  import { goto } from "@sapper/app";
  import PageItem from "@Components/Pagination/PageItem.svelte";
  import Language from "@Components/Language.svelte";
  import LoadingModal from "@Components/Loading.svelte";

  export let repository;
  let className = "";
  export { className as class };
  let isLoading = false;
</script>

<style>
  .card-footer :global(.add-margin) {
    margin-right: 8px;
  }
  .star {
    line-height: 1.5rem;
    padding: 5px 10px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
  }
</style>

<LoadingModal open={isLoading} />
<article class={`card ${className}`}>
  <div class="card-header">
    <nav aria-label="Page navigation ">
      <ul class="pagination m-0">
        <PageItem
          aria-label="go to first page"
          on:click={async () => {
            isLoading = true;
            await goto(`/repository?name=${repository.name}&owner=${repository.owner.login}`);
          }}>
          {repository.name}
        </PageItem>
      </ul>
    </nav>
    <span class="star badge badge-warning">
      Stars: {repository.stargazers.totalCount}
    </span>
  </div>
  <div class="card-body">{repository.description}</div>
  <div class="card-footer">
    {#each repository.languages.nodes as language (language.name)}
      <Language class="add-margin" {language} />
    {/each}
  </div>
</article>

<svelte:options immutable />
