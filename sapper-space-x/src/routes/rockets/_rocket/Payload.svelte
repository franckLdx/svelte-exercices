<script>
  import Title from "./Title.svelte";

  export let rocket;
</script>

<Title>Payload</Title>
<table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">Type</th>
      <th class="px-4 py-2">Maximum weight</th>
    </tr>
  </thead>
  <tbody>
    {#each rocket.payload_weights as payload (payload.id)}
      <tr>
        <td class="border px-4 py-2">{payload.name}</td>
        <td class="border px-4 py-2">{payload.kg}</td>
      </tr>
    {/each}
  </tbody>
</table>
