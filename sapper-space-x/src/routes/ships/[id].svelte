<script context="module">
  export async function preload(page) {
    return { ship: { name: "Not yet" } };
  }
</script>

<script>
  export let ship;
</script>

{ship.name}
