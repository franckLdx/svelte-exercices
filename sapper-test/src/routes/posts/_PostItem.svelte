<script>
  import ClickableCell from "ClickableCell.svelte";
  export let post;
</script>

<style>
  .content {
    overflow: auto;
    height: 5em;
  }
</style>

<ClickableCell title={post.title} link={`posts\\post?id=${post.id}`}>
  <div class="content">{post.body}</div>
</ClickableCell>
