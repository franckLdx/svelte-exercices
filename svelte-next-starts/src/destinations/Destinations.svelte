<script lang="ts">
  import { Button } from "svelte-materialify";
  import { onMount } from "svelte";
  import {
    destinationsStore,
    loadDestination,
    saveDestination,
  } from "../stores/destinations";

  onMount(() => {
    loadDestination();
    return destinationsStore.subscribe(saveDestination);
  });

  function add() {
    console.log("**************************");
    $destinationsStore = [...$destinationsStore, { name: "test" }];
  }
</script>

{$destinationsStore.length}
<Button class="primary-color" on:click={add}>Add</Button>
