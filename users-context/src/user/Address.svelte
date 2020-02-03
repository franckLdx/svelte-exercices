<script>
  import { getContext } from "svelte";

  const { street, city, zipcode } = getContext("user").address;
</script>

<style>
  div {
    padding-left: 15px;
    border-top: 1px groove;
  }
</style>

<div>
  {street}
  <br />
  {city} {zipcode}
</div>
