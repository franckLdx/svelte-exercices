<script>
  import Card from "../components/Card.svelte";
  import Address from "./Address.svelte";
  import Posts from "./Posts.svelte";
  import { setContext } from "svelte";

  export let user;

  setContext("user", user);
</script>

<Card title={user.name}>
  {user.email}
  <Address />
  <Posts />
</Card>
