<script>
  import { createEventDispatcher } from "svelte";
  import NavItem from "./NavItem.svelte";

  export let currentPageNumber;
  export let lastPageNumber;

  let width;

  const pages = [...Array(lastPageNumber).keys()].map(i => i + 1);

  const dispatch = createEventDispatcher();
  const onPage = page => dispatch("page", { page });
</script>

<div
  class="container flex justify-center"
  aria-label="Page nagigation"
  aria-valuenow={currentPageNumber}
  aria-valuemin="1"
  aria-valuemax={lastPageNumber}>
  <div class="inline lg:hidden">
    <NavItem
      ariaLabel={'prev'}
      disabled={currentPageNumber === 1}
      on:click={() => onPage(currentPageNumber - 1)}>
      &lt;
    </NavItem>
    <NavItem
      ariaLabel={'next'}
      disabled={currentPageNumber === lastPageNumber}
      on:click={() => onPage(currentPageNumber + 1)}>
      &gt;
    </NavItem>
  </div>
  <div class="hidden lg:inline">
    {#each pages as pageNumber (pageNumber)}
      <NavItem
        ariaLabel={pageNumber}
        disabled={pageNumber == currentPageNumber}
        on:click={() => onPage(pageNumber)}>
        {pageNumber}
      </NavItem>
    {/each}
  </div>
</div>
