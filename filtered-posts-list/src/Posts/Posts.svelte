<script>
  import DisplayPosts from "./DisplayPosts.svelte";
  import Loading from "./Loading.svelte";
  import NoPost from "./NoPost.svelte";
  import LoadError from "./LoadError.svelte";

  export let userId;

  let posts;
  async function loadPost(id) {
    if (id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const text = await res.text();
      posts = JSON.parse(text);
    } else {
      posts = [];
    }
  }

  $: promise = loadPost(userId);
</script>

<style>

</style>

<section>
  {#if !userId}
    <div />
  {:else}
    {#await promise}
      <Loading />
    {:then}
      {#if posts.length === 0}
        <NoPost />
      {:else}
        <DisplayPosts {posts} />
      {/if}
    {:catch error}
      <LoadError />
    {/await}
  {/if}
</section>

<svelte:options immutable />
