<script>
  import Filter from "./filter/Filter.svelte";
  import Todos from "./todos/Todos.svelte";
</script>

<style>
  :global(.margin-top) {
    margin-top: 20px;
  }
  :global(.margin-top-lg) {
    margin-top: 50px;
  }
</style>

<main class="container">
  <Filter />
  <Todos />
</main>

<svelte:options immutable />
