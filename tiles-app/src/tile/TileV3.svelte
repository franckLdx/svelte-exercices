<script>
  export let isVertical = false;
  export let size = undefined;
  export let color = undefined;

  import ParentTile from "./ParentTile.svelte";
  import { getColor } from "./func";
  $: classes = getColor(color);
</script>

<ParentTile {isVertical} {size}>
  <article class="tile is-child notification {classes}">
    <p class="title">
      <slot name="title" />
    </p>
    <div class="content">
      <slot />
    </div>
  </article>
</ParentTile>
