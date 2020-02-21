<script>
  import { AddComment } from "@Services";
  import Button from "@Components/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import {
    store,
    EDITING,
    SAVING,
    SAVED,
    ERROR,
    canSave,
    canClose
  } from "./store";

  let dispatch = createEventDispatcher();
  const onClose = () => dispatch("close");
  const onSave = async () => {
    store.setState(SAVING);
    try {
      await AddComment({
        name: $store.name,
        title: $store.title,
        body: $store.body
      });
      store.setState(SAVED);
    } catch (err) {
      store.setState(ERROR);
    }
  };

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
  <Button disabled={!$canClose} on:click={onClose}>{closeLabel}</Button>
</span>

<svelte:options immutable={true} />
