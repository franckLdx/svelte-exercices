<script>
  import Nav from "@Components/navHeader/NavMenu.svelte";
  import Loading from "@Components/Loading.svelte";

  import { loadingStore } from "@Lib/store";
  export let segment;
</script>

<Nav {segment} />
<Loading isLoading={$loadingStore.isLoading} />
<main class="container px-5 py-2">
  <slot />
</main>
