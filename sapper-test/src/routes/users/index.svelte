<script context="module">
  import { loadUsers } from "@Services";

  export async function preload(page, session) {
    try {
      return { users: await loadUsers(this) };
    } catch (err) {
      onError(this, err, "Sorry, failed to load users");
    }
  }
</script>

<script>
  import Grid from "Grid.svelte";
  import User from "./_UserItem.svelte";

  export let users;
</script>

<main>
  <Grid>
    {#each users as user (user.id)}
      <User {user} />
    {/each}
  </Grid>
</main>
