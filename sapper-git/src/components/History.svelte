<script>
  import { createEventDispatcher } from "svelte";
  import { stores } from "@sapper/app";
  import { addItem } from "@Lib/history";

  export let history;

  const { session } = stores();

  const dispatch = createEventDispatcher();

  let previous, current;
  $: {
    previous = history.slice(0, history.length - 1);
    current = history[history.length - 1];
  }

  function onLoading(name, url) {
    dispatch("loading");
    stores.history = addItem(stores.history, name, url);
  }
</script>

<style>
  .breadcrumb-item {
    text-transform: capitalize;
  }
</style>

<nav aria-label="history">
  <ol class="breadcrumb">
    {#each previous as item (item.url)}
      <li
        class="breadcrumb-item"
        aria-current={`back to ${item.name}`}
        on:click={() => onLoading(item.name, item.url)}>
        <a href={item.url}>{item.name}</a>
      </li>
    {/each}
    <li
      class="breadcrumb-item active"
      aria-current={`current page`}
      on:click={onLoading}>
      {current.name}
    </li>
  </ol>
</nav>

<svelte:options immutable />
