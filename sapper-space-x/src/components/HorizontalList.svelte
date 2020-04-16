<script>
  export let items;
  let className;
  export { className as class };
</script>

<dl class={`flex flex-wrap ${className}`}>
  {#each items as item (Object.keys(item)[0])}
    <div class="mr-24">
      <dt class="border-0 pb-1 border-b-2 font-bold text-xl">
        {Object.keys(item)[0]}
      </dt>
      <dd class="text-xl text-right">{Object.values(item)[0]}</dd>
    </div>
  {/each}
</dl>
