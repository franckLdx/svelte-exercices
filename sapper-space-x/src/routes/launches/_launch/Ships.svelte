<script>
  import { stores, goto } from "@sapper/app";
  import { getShipUrl } from "@Lib/url";

  let className;
  export { className as class };
  export let ships = "";

  const { preloading } = stores();
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
      <div
        class="flex flex-wrap link"
        class:cursor-pointer={!$preloading}
        on:click={() => goto(getShipUrl(ship.id))}>
        {#if ship.image}
          <img
            class="ship images object-scale-down"
            src={ship.image}
            alt="Ship's photo" />
        {/if}
        {ship.name}
        {#if ship.model}-- {ship.model}{/if}
      </div>
    {/each}
  </div>
{/if}
