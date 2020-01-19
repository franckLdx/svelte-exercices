<script>
  import { filteredTodos } from "../stores/filteredTodos";
  import { todos } from "../stores/todos";
  import Checkbox from "./TodoCheckbox.svelte";
  const onClick = ({ detail }) => filteredTodos.toggle(detail.id);
</script>

<style>
  .container {
    width: 15rem;
  }
</style>

<div class="container">
  {#each $filteredTodos as todo}
    <Checkbox {todo} on:click={onClick} />
  {/each}
</div>
