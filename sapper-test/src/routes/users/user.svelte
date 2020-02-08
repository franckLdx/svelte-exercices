<script context="module">
  import { assertInteger } from "@Utils/Validation";

  export async function preload(page, session) {
    const id = assertInteger(page.query.id, this);
    const response = await this.fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) {
      this.error("503", "Failed to load data");
    }
    const text = await response.text();
    return { user: JSON.parse(text) };
  }
</script>

<script>
  export let user;
</script>

{JSON.stringify(user)}
