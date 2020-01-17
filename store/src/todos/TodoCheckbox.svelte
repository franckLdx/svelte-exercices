<script>
  export let todo;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const onClick = id => dispatch("click", id);
</script>

<div class="field">
  <div class="control">
    <div class="b-checkbox is-primary is-circular">
      <input
        id={`checkbox-${todo.id}`}
        class="styled"
        checked={todo.done}
        type="checkbox"
        on:click={() => onClick(todo.id)} />
      <label for={`checkbox-${todo.id}`}>{todo.description}</label>
    </div>
  </div>
</div>
