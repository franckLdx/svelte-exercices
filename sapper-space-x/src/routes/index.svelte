<script context="module">
  import { getLastLaucnhesURL } from "@Lib/url";

  export function preload(page) {
    this.redirect(302, getLastLaucnhesURL());
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  onMount(() => goto(getLastLaucnhesURL()));
</script>

<main>
  <div>Loading please wait...</div>
</main>

<svelte:options immutable />
