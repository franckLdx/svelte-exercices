<script>
  export let items;
  let className;
  export { className as class };
</script>

<dl class={`md:flex md:flex-wrap ${className}`}>
  {#each items as item (Object.keys(item)[0])}
    <div class="md:mr-24">
      <dt class="border-b-2 font-bold text-xl pl-2">{Object.keys(item)[0]}</dt>
      <dd class="text-xl text-right">{Object.values(item)[0]}</dd>
    </div>
  {/each}
</dl>
