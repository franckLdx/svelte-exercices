<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`https://jsonplaceholder.typicode.com/posts`);
    const text = await res.text();
    return { posts: JSON.parse(text) };
  }
</script>

<script>
  import Grid from "../components/posts/Grid.svelte";
  import Cell from "../components/posts/Cell.svelte";
  import Post from "../components/posts/Post.svelte";

  export let posts;
</script>

<main>
  <Grid>
    {#each posts as post (post.id)}
      <Cell>
        <Post {post} />
      </Cell>
    {/each}
  </Grid>
</main>
