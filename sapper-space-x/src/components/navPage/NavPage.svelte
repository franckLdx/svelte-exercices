<script>
  import { createEventDispatcher } from "svelte";
  import NavItem from "./NavItem.svelte";

  export let page;
  export let lastPage;

  let width;

  const pages = [...Array(lastPage).keys()].map(i => i + 1);

  const dispatch = createEventDispatcher();
  const onPage = page => dispatch("page", { page });
</script>

<div
  class="container flex justify-center"
  aria-label="Page nagigation"
  aria-valuenow={page}
  aria-valuemin="1"
  aria-valuemax={lastPage}>
  <div class="inline lg:hidden">
    <NavItem
      ariaLabel={'prev'}
      disabled={page === 1}
      on:click={() => onPage(page - 1)}>
      &lt;
    </NavItem>
    <NavItem
      ariaLabel={'next'}
      disabled={page === lastPage}
      on:click={() => onPage(page + 1)}>
      &gt;
    </NavItem>
  </div>
  <div class="hidden lg:inline">
    {#each pages as number (number)}
      <NavItem
        ariaLabel={number}
        disabled={number == page}
        on:click={() => onPage(number)}>
        {number}
      </NavItem>
    {/each}
  </div>
</div>
