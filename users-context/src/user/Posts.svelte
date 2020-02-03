<script>
  import { getContext } from "svelte";

  const { id } = getContext("user");

  async function loadPost(userId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const text = await res.text();
    return JSON.parse(text);
  }
</script>

<style>
  div {
    margin-top: 10px;
    padding-top: 2px;
    border-top: 1px groove;
  }
</style>

<div>
  {#await loadPost(id)}Loading...{:then posts}Posts: {posts.length}{/await}
</div>
