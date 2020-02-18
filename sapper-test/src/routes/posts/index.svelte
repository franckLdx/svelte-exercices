<script context="module">
  import { loadPosts, makeUserLoader } from "@Services";
  import { onError } from "@Utils";

  const makePostReducer = context => {
    const usersLoader = makeUserLoader(context);
    return (acc, loadedPost) => {
      const post = { id: loadedPost.id, title: loadedPost.title };
      const pending = usersLoader(loadedPost.userId).then(
        user => (post.userName = user.username)
      );
      return {
        posts: [...acc.posts, post],
        pending: [...acc.pending, pending]
      };
    };
  };

  export async function preload(page, session) {
    try {
      const list = await loadPosts(this);
      const postReducer = makePostReducer(this);
      const { posts, pending } = list.reduce(postReducer, {
        posts: [],
        pending: []
      });
      await Promise.all(pending);
      return { posts };
    } catch (err) {
      onError(this, err, "Sorry, failed to load posts");
    }
  }
</script>

<script>
  import Grid from "@Grid/Grid.svelte";
  import ClickableCell from "@Grid/ClickableCell.svelte";
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
