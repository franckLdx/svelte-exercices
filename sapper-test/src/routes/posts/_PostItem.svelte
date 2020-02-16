<script>
  import ClickableCell from "ClickableCell.svelte";
  import Card from "@Card";
  import { postLink } from "@Utils";
  export let post;
</script>

<style>
  .title {
    min-height: 2.4em;
  }
</style>

<ClickableCell link={postLink(post.id)}>
  <Card>
    <h5 class="title" slot="title">{post.title}</h5>
    <div class="content">{post.userName}</div>
  </Card>
</ClickableCell>
