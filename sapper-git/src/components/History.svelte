<script>
  import { createEventDispatcher } from "svelte";

  export let history;

  const dispatch = createEventDispatcher();

  let previous, current;
  const home = { name: "Home", url: "/" };
  $: {
    previous = [home, ...history.slice(0, history.length - 1)];
    current = history[history.length - 1];
  }

  function onLoading() {
    dispatch("loading");
  }
</script>

<nav aria-label="history">
  <ol class="breadcrumb">
    {#each previous as item (item.url)}
      <li
        class="breadcrumb-item"
        aria-current={`back to ${item.name}`}
        on:click={onLoading}>
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
