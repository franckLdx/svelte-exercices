<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`https://jsonplaceholder.typicode.com/users`);
    const text = await res.text();
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
      <Cell link={`uers\\user?${user.id}`}>
        <User {user} />
      </Cell>
    {/each}
  </Grid>
</main>
