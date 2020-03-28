<script>
  import NavItem from "./NavItem.svelte";
  export let page;
  export let lastPage;

  let width;

  const pages = [...Array(lastPage).keys()].map(i => i + 1);
</script>

<div
  class="flex justify-center"
  aria-label="Page nagigation"
  aria-valuenow={page}
  aria-valuemin="1"
  aria-valuemax={lastPage}>
  <div class="inline lg:hidden">
    <NavItem id={'prev'} disabled={page === 1}>&lt;</NavItem>
    <NavItem id={'next'} disabled={page === lastPage}>&gt;</NavItem>
  </div>
  <div class="hidden lg:inline">
    {#each pages as number (number)}
      <NavItem id={number} disabled={number == page}>{number}</NavItem>
    {/each}
  </div>
</div>
