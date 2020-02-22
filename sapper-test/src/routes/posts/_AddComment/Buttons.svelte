<script>
  import Button from "@Components/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import {
    store,
    EDITING,
    SAVING,
    SAVED,
    ERROR,
    canSave,
    canClose,
    canClear
  } from "./store";
  import { save } from "./save";

  let dispatch = createEventDispatcher();
  const onClose = () => $canClose && dispatch("close");
  const onSave = () => $canSave && save(store);
  const onClear = () => $canClear && store.clearFields();

  $: closeLabel = [EDITING, SAVING, ERROR].includes($store.state)
    ? "Cancel"
    : "Close";
</script>

<style>
  span :global(button) {
    width: 7em;
  }
</style>

<span>
  <Button disabled={!$canSave} on:click={onSave}>Save</Button>
  <Button disabled={!$canClear} on:click={onClear}>Clear</Button>
  <Button disabled={!$canClose} on:click={onClose}>{closeLabel}</Button>
</span>

<svelte:options immutable={true} />
