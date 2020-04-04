<script>
  import Nav from "@Components/navHeader/NavMenu.svelte";

  export let segment;
</script>

<Nav {segment} />
<main class="container px-5 py-2">
  <slot />
</main>
