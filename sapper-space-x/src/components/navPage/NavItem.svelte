<script>
  import { createEventDispatcher } from "svelte";

  export let ariaLabel;
  export let disabled;

  const dispatch = createEventDispatcher();
</script>

<button
  class={`link font-bold py-2 px-4 mr-1 border rounded hover:bg-blue-700`}
  class:disabled
  {disabled}
  on:click={() => dispatch('click')}
  aria-label={`Page ${ariaLabel}`}>
  <slot />
</button>
