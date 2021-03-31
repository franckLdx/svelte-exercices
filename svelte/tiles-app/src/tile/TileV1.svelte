<script>
  export let title;
  export let content;
</script>

<div class="tile is-parent">
  <article class="tile is-child notification">
    {#if title}
      <p class="title">{title}</p>
    {/if}
    <div class="content">{content}</div>
  </article>
</div>
