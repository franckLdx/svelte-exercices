<script context="module">
  import { getRepositoriesURL } from "@Lib/url";

  export function preload(page) {
    this.redirect(302, getRepositoriesURL());
  }
</script>

<main>
  <div>Loading posts, please wait...</div>
</main>

<svelte:options immutable />
