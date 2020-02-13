<script context="module">
  import { assertInteger, onError } from "@Utils";
  import { loadPost, loadPostComments } from "@Services";

  export async function preload(page, session) {
    try {
      const id = assertInteger(page.query.id);
      return {
        post: await loadPost(this, id),
        comments: await loadPostComments(this, id)
      };
    } catch (err) {
      onError(this, err, "Sorry, failed to load this post");
    }
  }
</script>

<script>
  import Comment from "./_CommentItem.svelte";
  export let post;
  export let comments;
</script>

<div class="jumbotron">
  <h3>{post.title}</h3>
  <hr class="my-4" />
  {post.body}
</div>
<div class="jumbotron p-3">
  {#each comments as comment (comment.id)}
    <Comment {comment} />
  {/each}
</div>
