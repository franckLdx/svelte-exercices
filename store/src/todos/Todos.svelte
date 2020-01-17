<script>
  import { filteredTodos } from "../stores/filteredTodos";
  import { todos } from "../stores/todos";
  import Checkbox from "./TodoCheckbox.svelte";
  const onClick = ({ detail }) => todos.toggle(detail);
  $: console.log($todos);
</script>

{#each $filteredTodos as todo}
  <Checkbox {todo} on:click={onClick} />
{/each}
