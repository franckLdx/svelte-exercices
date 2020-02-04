<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`https://jsonplaceholder.typicode.com/posts`);
    const text = await res.text();
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
      <Cell link={`posts\\post?${post.id}`}>
        <Post {post} />
      </Cell>
    {/each}
  </Grid>
</main>
