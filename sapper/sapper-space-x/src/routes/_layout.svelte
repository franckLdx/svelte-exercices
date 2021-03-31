<script>
  import Nav from "./_layout/MainNav.svelte";
  import Loading from "@Components/Loading.svelte";

  import { stores } from "@sapper/app";
  const { page, preloading } = stores();
</script>

<div class="container" class:cursor-wait={$preloading}>
  <Nav path={$page.path} />
  <Loading isLoading={$preloading} />
  <main class="container px-5 py-2">
    <slot />
  </main>
</div>
