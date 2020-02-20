<script>
  import Button from "@Components/Button.svelte";
  import { canSave } from "./_store";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
  const onClose = () => dispatch("close");
</script>

<Button disabled={!$canSave}>Save</Button>
<Button on:click={onClose}>Cancel</Button>

<svelte:options immutable={true} />
