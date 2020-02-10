<script context="module">
  export async function preload(page, session) {
    const response = await this.fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    if (!response.ok) {
      this.error("503", "Failed to load data");
    }
    const text = await response.text();
    return { posts: JSON.parse(text) };
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
