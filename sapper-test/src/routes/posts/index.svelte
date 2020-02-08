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
  import Cell from "Cell.svelte";
  import Post from "@Posts/Post.svelte";

  export let posts;
</script>

<main>
  <Grid>
    {#each posts as post (post.id)}
      <Cell link={`posts\\post?id=${post.id}`}>
        <Post {post} />
      </Cell>
    {/each}
  </Grid>
</main>
