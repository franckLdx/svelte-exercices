<script>
  import ClickableCell from "@Grid/ClickableCell.svelte";
  import Card from "@Components/Card.svelte";
  import { userLink } from "@Utils";
  export let user;
</script>

<style>

</style>

<ClickableCell link={userLink(user.id)}>
  <Card>
    <h5 slot="title">{user.username} / {user.name}</h5>
    <div>
      Mail : {user.email}
      <br />
      City: {user.address.city},
    </div>
  </Card>
</ClickableCell>
