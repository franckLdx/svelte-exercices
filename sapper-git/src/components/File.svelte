<script>
  export let content;

  function format(raw) {
    let result = raw;
    result = result.replace(/</g, "&lt;");
    return result
      .replace(/\r\n/g, "<br/>")
      .replace(/\n/g, "<br/>")
      .replace(/\r/g, "<br/>")
      .replace(/\s/g, "&nbsp");
  }
</script>

<article class="card">
  <div class="card-body">
    {@html format(content)}
  </div>
</article>
<svelte:options immutable />
