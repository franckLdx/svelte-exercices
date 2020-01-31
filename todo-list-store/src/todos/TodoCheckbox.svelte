<script>
  import { createEventDispatcher } from "svelte";
  import Done from "./icons/Done.svelte";
  import Undone from "./icons/Undone.svelte";

  $: icon = todo.done ? Done : Undone;

  export let todo;

  const dispatch = createEventDispatcher();
  const onClick = () => dispatch("click", { id: todo.id });
</script>

<style>
  .todo {
    width: 15rem;
  }
  .todo:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  .is-center {
    display: flex;
    align-items: center;
  }
</style>

<div class="notification is-success todo" on:click={onClick}>
  <div class="tile is-ancestor">
    <div class="tile is-child is-2 is-center">
      <svelte:component this={icon} />
    </div>
    <div class="tile is-child">{todo.description}</div>
  </div>
</div>

<svelte:options immutable />
