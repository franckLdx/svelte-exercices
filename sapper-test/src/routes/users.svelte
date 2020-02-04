<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`https://jsonplaceholder.typicode.com/users`);
    const text = await res.text();
    return { users: JSON.parse(text) };
  }
</script>

<script>
  import Grid from "../components/Grid.svelte";
  import Cell from "../components/Cell.svelte";

  export let users;
</script>

<main>
  <Grid>
    {#each users as user (user.id)}
      <Cell>{user.name}</Cell>
    {/each}
  </Grid>
</main>
