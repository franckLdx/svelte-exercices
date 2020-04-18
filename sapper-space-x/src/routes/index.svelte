<script context="module">
  import { getLaunchesURL } from "@Lib/url";

  export function preload(page) {
    this.redirect(302, getLaunchesURL());
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  onMount(() => goto(getLaunches()));
</script>

<main>
  <div>Loading please wait...</div>
</main>

<svelte:options immutable />
