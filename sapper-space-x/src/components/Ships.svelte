<script>
  let className;
  export { className as class };

  export let ships = "";
</script>

<style>
  .ship {
    max-width: 30rem;
    max-height: 30rem;
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
          class="ship object-scale-down"
          src={ship.image}
          alt="Ship's photo" />
        {#if ship.model}{ship.name} -- {ship.model}{:else}{ship.name}{/if}
      </div>
    {/each}
  </div>
{/if}
