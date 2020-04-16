<script>
  let className;
  export { className as class };

  export let ships = "";
</script>

<style>
  .ship {
    margin-right: 1rem;
    margin-bottom: 2rem;
  }
</style>

{#if ships.length > 0}
  <div class={className}>
    Ships involed by this mission:
    {#each ships as ship}
      <div class="flex flex-wrap">
        <img
          class="ship images object-scale-down"
          src={ship.image}
          alt="Ship's photo" />
        {#if ship.model}{ship.name} -- {ship.model}{:else}{ship.name}{/if}
      </div>
    {/each}
  </div>
{/if}
