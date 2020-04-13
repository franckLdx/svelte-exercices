<script>
  import Nav from "@Components/navHeader/NavMenu.svelte";
  import Loading from "@Components/Loading.svelte";

  import { stores } from "@sapper/app";
  const { page, preloading } = stores();
</script>

<div class:cursor-wait={$preloading}>
  <Nav path={$page.path} />
  <Loading isLoading={$preloading} />
  <main class="container px-5 py-2">
    <slot />
  </main>
</div>
