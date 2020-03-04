<script>
  import { createEventDispatcher } from "svelte";
  import PageItem from "@Components/Pagination/PageItem.svelte";

  export let hasPreviousPage;
  export let hasNextPage;

  const dispatch = createEventDispatcher();
  const onFirstPage = () => dispatch("firstPage");
  const onPreviousPage = () => dispatch("previousPage");
  const onNextPage = () => dispatch("nextPage");
  const onLastPage = () => dispatch("lastPage");
</script>

<nav aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <PageItem
      disabled={!hasPreviousPage}
      aria-label="go to first page"
      on:click={onFirstPage}>
      <span aria-hidden="true">&laquo;</span>
    </PageItem>
    <PageItem
      disabled={!hasPreviousPage}
      aria-label="go to previous page"
      on:click={onPreviousPage}>
      <span aria-hidden="true">&lt;</span>
    </PageItem>
    <PageItem
      disabled={!hasNextPage}
      aria-label="go to next page"
      on:click={onNextPage}>
      <span aria-hidden="true">&gt;</span>
    </PageItem>
    <PageItem
      disabled={!hasNextPage}
      aria-label="go to last page"
      on:click={onLastPage}>
      <span aria-hidden="true">&raquo;</span>
    </PageItem>
  </ul>
</nav>

<svelte:options immutable />
