<script lang="ts">
  // import { Button } from "svelte-materialify";
  import { destinationsStore } from "../../stores/destinations";

  function add() {
    $destinationsStore = [...$destinationsStore];
  }
</script>

<!-- {$destinationsStore.length}
<Button class="secondary-color" on:click={add}>Add</Button> -->
