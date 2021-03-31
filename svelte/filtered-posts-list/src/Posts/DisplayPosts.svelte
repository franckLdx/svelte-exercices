<script>
  import Post from "./Post.svelte";

  export let posts;
</script>

<div class="columns is-multiline ">
  {#each posts as post (post.id)}
    <div
      class="column is-half-tablet is-half-desktop is-one-half-widescreen
      is-one-third-fullhd is-narow">
      <Post {post} />
    </div>
  {/each}
</div>
