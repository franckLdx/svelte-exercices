<script>
  import Nav from "@Components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main class="container-fluid">
  <slot />
</main>
