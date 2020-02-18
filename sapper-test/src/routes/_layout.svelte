<script>
  import Nav from "@Components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
