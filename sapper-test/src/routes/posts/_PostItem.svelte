<script>
  import ClickableCell from "@Grid/ClickableCell.svelte";
  import Card from "@Components/Card.svelte";
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

<svelte:options immutable={true} />
