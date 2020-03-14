<script context="module">
  import { getUrl } from "./repositories/index.svelte";
  export function preload(page, session) {
    this.redirect(302, getUrl());
  }
</script>

<main>
  <div>Loading posts, please wait...</div>
</main>

<svelte:options immutable />
