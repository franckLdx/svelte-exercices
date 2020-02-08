<script context="module">
  export async function preload(page, session) {
    const response = await this.fetch(
      `https://jsonplaceholder.typicode.com/users`
    );
    if (!response.ok) {
      this.error("503", "Failed to load data");
    }
    const text = await response.text();
    return { users: JSON.parse(text) };
  }
</script>

<script>
  import Grid from "Grid.svelte";
  import Cell from "Cell.svelte";
  import User from "@Users/User.svelte";

  export let users;
</script>

<main>
  <Grid>
    {#each users as user (user.id)}
      <Cell link={`users\\user?id=${user.id}`}>
        <User {user} />
      </Cell>
    {/each}
  </Grid>
</main>
