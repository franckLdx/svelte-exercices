<style>
  .card-header {
    overflow: auto;
  }
</style>

<article class="card border-dark">
  <div class="card-header">
    <slot name="title" />
  </div>
  <div class="card-body">
    <slot />
  </div>
</article>
