<script context="module">
  import { getPastLaunchesURL } from "@Lib/url";

  export function preload(page) {
    this.redirect(302, getPastLaunchesURL());
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  onMount(() => goto(getLaunchesPast()));
</script>

<main>
  <div>Loading please wait...</div>
</main>

<svelte:options immutable />
