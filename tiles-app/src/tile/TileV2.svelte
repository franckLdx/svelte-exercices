<script>
  import { getColor } from "./func";
  export let title;
  export let color = undefined;
  $: classes = getColor(color);
</script>

<div class="tile is-parent">
  <article class="tile is-child notification {classes}">
    {#if title}
      <p class="title">{title}</p>
    {/if}
    <div class="content">
      <slot />
    </div>
  </article>
</div>
