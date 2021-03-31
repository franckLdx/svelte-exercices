<script>
  import { filteredTodos } from "../stores/filteredTodos";
  import Todo from "./Todo.svelte";

  const onClick = ({ detail }) => filteredTodos.toggle(detail.id);
</script>

<style>
  .container {
    width: 15rem;
  }
</style>

<div class="margin-top-lg">
  <div class="container">
    {#each $filteredTodos as todo (todo.id)}
      <Todo {todo} on:click={onClick} />
    {/each}
  </div>
</div>

<svelte:options immutable />
