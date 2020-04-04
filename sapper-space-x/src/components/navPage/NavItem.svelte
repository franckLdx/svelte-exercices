<script>
  import { createEventDispatcher } from "svelte";

  export let ariaLabel;
  export let disabled;

  const dispatch = createEventDispatcher();
</script>

<button
  class={`font-bold py-2 px-4 mr-1 border border-white rounded hover:bg-blue-700 ${disabled ? 'opacity-50' : undefined}`}
  class:disabled
  {disabled}
  on:click={() => dispatch('click')}
  aria-label={`Page ${ariaLabel}`}>
  <slot />
</button>
