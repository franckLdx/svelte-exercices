<script lang="ts">
  import { Menu, List, ListItem, Button } from "svelte-materialify/src";
  import { onMount } from "svelte";
  import type { Destinations } from "../../models/destinations";
  import {
    currentDetinationStore,
    destinationsStore,
    loadDestination,
    saveDestination,
  } from "../../stores/destinations";

  onMount(() => {
    const destinations = loadDestination();
    destinationsStore.set(destinations);
    return destinationsStore.subscribe(saveDestination);
  });

  let items: Destinations = $destinationsStore;
  $: items = $destinationsStore.sort((first, second) =>
    first.name.localeCompare(second.name)
  );

  const click = (event: Event) => {
    const destinationName = (event.target as HTMLElement).innerText;
    currentDetinationStore.set(destinationName);
  };

  let label;
  $: label = $currentDetinationStore ?? "Choisi une Destinations";
</script>

<Menu hover>
  <div slot="activator">
    <Button class="ml-3 mb-0">
      <span class="font-weight-bold">{label}</span>
    </Button>
  </div>
  <List>
    {#each items as item (item.name)}
      <ListItem on:click={click}>
        <span class="font-weight-bold">{item.name}</span>
      </ListItem>
    {/each}
  </List>
</Menu>
