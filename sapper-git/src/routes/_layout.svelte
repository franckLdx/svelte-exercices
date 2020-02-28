<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main class="container-fluid pt-2 px-3">
  <slot />
</main>
