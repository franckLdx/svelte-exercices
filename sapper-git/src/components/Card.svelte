<script>
  export let header;
  export let body;
</script>

<article class="card">
  <div class="card-header">{header}</div>
  <div class="card-body">{body}</div>
</article>

<svelte:options immutable />
