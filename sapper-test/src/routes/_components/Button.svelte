<script>
  import { createEventDispatcher } from "svelte";

  export let id = undefined;
  let className = "";
  export { className as class };
  export let disabled = false;
  const dispatch = createEventDispatcher();
  const onClick = () => dispatch("click");
</script>

<button
  {id}
  type="button"
  class={`btn btn-dark ${className}`}
  class:disabled
  on:click={onClick}>
  <slot />
</button>
