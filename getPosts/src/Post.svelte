<script>
  export let post;
</script>

<style>
  .card {
    max-width: 500px;
  }
</style>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">{post.title}</p>
  </header>
  <div class="card-content">
    <div class="content">{post.body}</div>
  </div>
</div>
