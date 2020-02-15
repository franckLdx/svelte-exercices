<script>
  import ClickableCell from "ClickableCell.svelte";
  export let post;
</script>

<style>
  .title {
    min-height: 2.4em;
  }
</style>

<ClickableCell link={`posts\\post?id=${post.id}`}>
  <h3 class="title" slot="title">{post.title}</h3>
  <div class="content">{post.userName}</div>
</ClickableCell>
