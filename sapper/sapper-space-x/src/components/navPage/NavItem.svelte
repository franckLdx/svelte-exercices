<script>
  import { createEventDispatcher } from "svelte";
  import { stores } from "@sapper/app";

  export let ariaLabel;
  export let disabled;

  const dispatch = createEventDispatcher();
  const { preloading } = stores();
</script>

<button
  class={`link font-bold py-2 px-4 mr-1 border rounded hover:bg-blue-700`}
  class:cursor-wait={$preloading}
  class:disabled
  {disabled}
  on:click={() => dispatch('click')}
  aria-label={`Page ${ariaLabel}`}>
  <slot />
</button>
