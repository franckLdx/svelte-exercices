<script>
  import PageItem from "@Components/PageItem.svelte";

  export let totalCount;
  export let pageInfo;
  export let activePage;

  $: pagesCount = Math.ceil(totalCount / 10);
  $: pages = [...Array(pagesCount).keys()].map(i => i + 1);
</script>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <PageItem
      disabled={!pageInfo.hasPreviousPage}
      aria-label="go to previous page">
      <span aria-hidden="true">&laquo;</span>
    </PageItem>
    {#each pages as page (page)}
      <PageItem active={page === activePage} aria-label={`go to page ${page}`}>
        {page}
      </PageItem>
    {/each}
    <PageItem
      class="pageItem"
      aria-label="go to next page"
      disabled={!pageInfo.hasNextPage}>
      <span aria-hidden="true">&raquo;</span>
    </PageItem>
  </ul>
</nav>

<svelte:options immutable />
