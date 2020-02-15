<script context="module">
  import { assertInteger, onError } from "@Utils";
  import { loadUser } from "@Services";

  export async function preload(page, session) {
    try {
      const id = assertInteger(page.query.id);
      return {
        user: await loadUser(this, id)
      };
    } catch (err) {
      onError(this, err, "Sorry, failed to load this user");
    }
  }
</script>

<script>
  import Card from "@Card";
  export let user;
</script>

<Card>
  <h3 slot="title">{user.username}</h3>
  {user.name}
  <br />
  {user.email}
  <hr />
  <p class="h6">Address:</p>
  <div>
    {user.address.suite} {user.address.street} {user.address.city} ({user.address.zipcode})
    <br />
    geo: {user.address.geo.lat}, {user.address.geo.lng}
    <br />
    phone: {user.phone}
  </div>
  <hr />
  <span class="h6">Website:</span>
  {user.website}
  <hr />
  <div>
    <p class="h6">Company:</p>
    {user.company.name},
    <i>"{user.company.catchPhrase}"</i>
    <br />
    {user.company.bs}
  </div>
</Card>
