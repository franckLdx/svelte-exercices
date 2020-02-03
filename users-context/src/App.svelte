<script>
  import { usersStore } from "./stores/users";
  import Columns from "./components/Columns.svelte";
  import Cell from "./components/Cell.svelte";
  import User from "./User/User.svelte";
</script>

<style>

</style>

<main>
  <Columns>
    {#each $usersStore.users as user (user.id)}
      <Cell>
        <User {user} />
      </Cell>
    {/each}
  </Columns>
</main>

<svelte:options immutable />
