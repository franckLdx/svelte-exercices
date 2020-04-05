<script>
  let className;
  export { className as class };

  export let ships;
</script>

<style>
  .ship {
    max-width: 50rem;
    max-height: 50rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
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
