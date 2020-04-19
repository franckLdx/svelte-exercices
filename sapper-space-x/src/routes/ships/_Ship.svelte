<script>
  export let ship;
</script>

<h1 class="title2">{ship.name}</h1>
<img
  class="h-64 w-64 mx-auto mt-2 mb-2 object-scale-down"
  src={ship.image}
  alt={`${ship.name} image`} />
