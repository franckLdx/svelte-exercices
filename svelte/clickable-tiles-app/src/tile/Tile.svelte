<script>
  export let id;
  export let isVertical = false;
  export let size = undefined;
  export let active = undefined;

  import { getColor } from "./func";
  import ParentTile from "./ParentTile.svelte";
  import { createEventDispatcher } from "svelte";

  $: color = getColor(active);

  const dispatch = createEventDispatcher();
  const onClick = () =>
    dispatch("clicked", {
      id
    });
</script>

<style>
  .clickable:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 10px 5px 15px;
  }
</style>

<ParentTile {isVertical} {size}>
  <article
    class="tile is-child notification {color} clickable"
    on:click={onClick}>
    <p class="title">
      <slot name="title" />
    </p>
    <div class="content">
      <slot />
    </div>
  </article>
</ParentTile>
