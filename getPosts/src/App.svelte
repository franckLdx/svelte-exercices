<script>
  import Post from "./Post.svelte";

  async function loadPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const text = await res.text();
    return JSON.parse(text);
  }
</script>

<style>

</style>

<main>
  {#await loadPost()}
    <p>...Loading please wait</p>
  {:then posts}
    <div class="columns is-multiline">
      {#each posts as post (post.id)}
        <div
          class="column is-half-tablet is-half-desktop is-one-half-widescreen
          is-one-third-fullhd is-narow">
          <Post {post} />
        </div>
      {/each}
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
