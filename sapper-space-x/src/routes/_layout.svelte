<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main class="container px-5 py-2 bg-black text-white">
  <slot />
</main>
