<script>
  export let content;
</script>

<article class="card">
  <div class="card-body">
    {@html content
      .replace(/\r\n/g, '<br/>')
      .replace(/\n/g, '<br/>')
      .replace(/\r/g, '<br/>')
      .replace(/\s/g, '&nbsp')}
  </div>
</article>
<svelte:options immutable />
