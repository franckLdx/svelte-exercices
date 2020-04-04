<script>
  import { createEventDispatcher } from "svelte";

  export let ariaLabel;
  export let disabled;

  const dispatch = createEventDispatcher();
</script>

<button
  class="linkPill"
  class:disabled
  {disabled}
  on:click={() => dispatch('click')}
  aria-label={`Page ${ariaLabel}`}>
  <slot />
</button>
