<script context="module">
  import { assertInteger, onError } from "@Utils";
  import { loadPost, loadPostComments, loadUser } from "@Services";

  const loadPostAndUser = async (context, id) => {
    const post = await loadPost(context, id);
    post.user = await loadUser(context, post.userId);
    return post;
  };

  export async function preload(page, session) {
    try {
      const id = assertInteger(page.query.id);
      const [post, comments] = await Promise.all([
        loadPostAndUser(this, id),
        loadPostComments(this, id)
      ]);
      return { post, comments };
    } catch (err) {
      console.log(err);
      onError(this, err, "Sorry, failed to load this post");
    }
  }
</script>

<script>
  import Comment from "./_CommentItem.svelte";
  import AddComment from "./_AddComment.svelte";
  import Card from "@Card";
  import { userLink } from "@Utils";

  export let post;
  export let comments;

  let modalOpen = false;
</script>

<Card>
  <div class="foo" slot="title">
    <h3>{post.title}</h3>
    <a
      href={userLink(post.userId)}
      class="h5 card-subtitle mt-1 ml-4 text-muted">
      {post.user.username}
    </a>
  </div>
  {post.body}
  <div class="mt-4 p-3">
    {#each comments as comment (comment.id)}
      <div class="mb-2">
        <Comment {comment} />
      </div>
    {/each}
  </div>
  <button class="btn btn-outline-dark" on:click={() => (modalOpen = true)}>
    Add comment
  </button>
  <AddComment {modalOpen} on:close={() => (modalOpen = false)} />
</Card>
