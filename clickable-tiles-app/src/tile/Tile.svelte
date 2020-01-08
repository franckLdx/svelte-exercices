<script>
  export let isVertical = false;
  export let size = undefined;
  export let color = undefined;
  export let id;

  import ParentTile from "./ParentTile.svelte";
  import { getColor } from "./func";
  let classes = getColor(color);
  const onClick = event => alert(`tile: ${id}`);
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
    class="tile is-child notification {classes} clickable"
    on:click={onClick}>
    <p class="title">
      <slot name="title" />
    </p>
    <div class="content">
      <slot />
    </div>
  </article>
</ParentTile>
