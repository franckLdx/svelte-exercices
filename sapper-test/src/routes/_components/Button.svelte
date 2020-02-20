<script>
  import { createEventDispatcher } from "svelte";

  let className = "";
  export { className as class };
  export let disabled = false;

  const dispatch = createEventDispatcher();
  const onClick = () => dispatch("click");
</script>

<button
  type="button"
  class={`btn btn-dark ${className}`}
  class:disabled
  on:click={onClick}>
  <slot />
</button>
