<script>
  export let repository;
  let className = "";
  export { className as class };
  $: header = repository.url.slice(repository.url.lastIndexOf("/") + 1);
  const getColor = language =>
    language.color === "#f1e05a" ? "#dbc43b" : language.color;
</script>

<style>
  span {
    margin-right: 8px;
  }
</style>

<article class={`card ${className}`}>
  <div class="card-header">{header}</div>
  <div class="card-body">{repository.description}</div>
  <div class="card-footer">
    {#each repository.languages.nodes as language}
      <span style="color:{getColor(language)}">{language.name}</span>
    {/each}
  </div>
</article>

<svelte:options immutable />
