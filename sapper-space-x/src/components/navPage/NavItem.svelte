<script>
  export let id;
  export let disabled;

  let extraClass;
  $: extraClass = disabled ? "opacity-50" : "";
  $: onClick = () => console.log(id);
  function onClick() {}
</script>

<button
  class={`font-bold py-2 px-4 mr-1 rounded hover:bg-blue-700 border border-white ${extraClass}`}
  {disabled}
  on:click={onClick}
  aria-label={`Page ${id}`}>
  <slot />
</button>
