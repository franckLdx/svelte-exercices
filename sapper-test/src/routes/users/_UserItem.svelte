<script>
  import ClickableCell from "ClickableCell.svelte";
  export let user;
</script>

<style>

</style>

<ClickableCell title={user.username} link={`users\\user?id=${user.id}`}>
  <div>{user.name}{user.email}</div>
</ClickableCell>
