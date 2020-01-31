<script>
  import { filter as filterStore } from "../stores/filter";
  export let filter;
</script>

<button
  class="button is-success is-rounded"
  class:is-active={$filterStore === filter}
  on:click={() => filterStore.set(filter)}>
  <slot />
</button>

<svelte:options immutable />
