<script context="module">
  import { assertInteger } from "@Utils/Validation";

  export async function preload(page, session) {
    const id = assertInteger(page.query.id, this);
    const response = await this.fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      this.error("503", "Failed to load data");
    }
    const text = await response.text();
    return { post: JSON.parse(text) };
  }
</script>

<script>
  export let post;
</script>

{JSON.stringify(post)}
