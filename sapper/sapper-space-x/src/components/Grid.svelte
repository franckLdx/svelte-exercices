<script>
  import { createEventDispatcher } from "svelte";
  import { stores } from "@sapper/app";
  import NavPage from "@Components/navPage/NavPage.svelte";

  export let items;
  export let currentPageNumber;
  export let lastPageNumber;

  const { preloading } = stores();

  const dispatch = createEventDispatcher();
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pb-4">
  {#each items as item (item.id)}
    <article
      class="link border rounded px-3 pb-1"
      class:cursor-pointer={!$preloading}
      on:click={() => dispatch('loadItem', { id: item.id })}>
      <slot prop={item} />
    </article>
  {/each}
</section>

<NavPage
  {currentPageNumber}
  {lastPageNumber}
  on:page={({ detail }) => dispatch('loadPage', { page: detail.page })} />
