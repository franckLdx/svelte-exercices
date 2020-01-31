<script>
  import DisplayPosts from "./DisplayPosts.svelte";
  import Loading from "./Loading.svelte";
  import NoPost from "./NoPost.svelte";
  import LoadError from "./LoadError.svelte";

  export let userId;

  async function loadPost(id) {
    if (id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const text = await res.text();
      return JSON.parse(text);
    }
    return [];
  }
</script>

<style>

</style>

<section>
  {#if !userId}
    <div />
  {:else}
    {#await loadPost(userId)}
      <Loading />
    {:then posts}
      {#if posts.length === 0}
        <NoPost />
      {:else}
        <DisplayPosts {posts} />
      {/if}
    {:catch error}
      <LoadError error />
    {/await}
  {/if}
</section>

<svelte:options immutable />
