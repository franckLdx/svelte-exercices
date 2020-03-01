<script>
  import { createEventDispatcher } from "svelte";

  $: ariaLabel = $$props["aria-label"];
  export let disabled;

  const dispatch = createEventDispatcher();
</script>

<li class="page-item" class:disabled>
  <button
    type="button"
    class="btn page-link"
    aria-label={ariaLabel}
    {disabled}
    on:click={() => dispatch('click')}>
    <slot />
  </button>
</li>

<svelte:options immutable />
