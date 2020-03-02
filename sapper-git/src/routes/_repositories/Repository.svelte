<script>
  import Language from "@Components/Language.svelte";

  export let repository;
  let className = "";
  export { className as class };
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

<article class={`card ${className}`}>
  <div class="card-header">
    <span class="font-weight-bold">{repository.name}</span>
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
