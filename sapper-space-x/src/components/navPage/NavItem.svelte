<script>
  import { createEventDispatcher } from "svelte";

  export let ariaLabel;
  export let disabled;

  const dispatch = createEventDispatcher();
  $: extraClass = disabled ? "opacity-50" : "";
</script>

<button
  class={`font-bold py-2 px-4 mr-1 rounded hover:bg-blue-700 border border-white ${extraClass}`}
  {disabled}
  on:click={() => dispatch('click')}
  aria-label={`Page ${ariaLabel}`}>
  <slot />
</button>
