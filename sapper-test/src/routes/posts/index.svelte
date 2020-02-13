<script context="module">
  import { loadPosts } from "@Services";
  import { onError } from "@Utils";

  export async function preload(page, session) {
    try {
      return { posts: await loadPosts(this) };
    } catch (err) {
      onError(this, err, "Sorry, failed to load posts");
    }
  }
</script>

<script>
  import Grid from "Grid.svelte";
  import ClickableCell from "ClickableCell.svelte";
  import Post from "./_PostItem.svelte";

  export let posts;
</script>

<style>
  .row {
    margin: auto 0;
  }
</style>

<div class="container-fluid">
  <div class="row">
    {#each posts as post (post.id)}
      <Post {post} />
    {/each}
  </div>
</div>
