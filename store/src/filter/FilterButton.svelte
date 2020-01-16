<script>
  import { filter as filterStore } from "../store/filter";
  export let filter;
</script>

<button
  class="button is-primary is-rounded"
  class:is-active={$filterStore === filter}
  on:click={() => filterStore.set(filter)}>
  <slot />
</button>
