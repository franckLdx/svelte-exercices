<script>
  import { createEventDispatcher } from "svelte";

  export let todo;

  const dispatch = createEventDispatcher();
  const onClick = () => dispatch("click", { id: todo.id });

  $: icon = todo.done ? "fa-check-circle" : "fa-circle";
</script>

<style>
  .todo {
    width: 15rem;
  }
  .todo:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 10px 5px 15px;
  }
  .is-center {
    display: flex;
    align-items: center;
  }
</style>

<div class="notification is-success todo" on:click={onClick}>
  <div class="tile is-ancestor">
    <div class="tile is-child is-2 is-center">
      <span class="icon">
        <i class="far {icon}" />
      </span>
    </div>
    <div class="tile is-child">{todo.description}</div>
  </div>
</div>
