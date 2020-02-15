<script>
  import ClickableCell from "ClickableCell.svelte";
  export let user;
</script>

<style>

</style>

<ClickableCell link={`users\\user?id=${user.id}`}>
  <h5 slot="title">{user.username} / {user.name}</h5>
  <div>
    Mail : {user.email}
    <br />
    City: {user.address.city},
  </div>
</ClickableCell>
