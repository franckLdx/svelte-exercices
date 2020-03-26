<script context="module">
  import { getLastLaunches } from "@Services/launches";
  import Launch from "@Components/Launch.svelte";

  export async function preload() {
    return { launches: await getLastLaunches(this.fetch) };
  }
</script>

<script>
  export let launches;
</script>

<section
  class="px-5 py-2 bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
  {#each launches as launch (launch.id)}
    <Launch {launch} />
  {/each}
</section>
