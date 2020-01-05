<script>
  export let name;
  import Tiles from "./TilesV1.svelte";
</script>

<style>
  #main {
    text-align: center;
  }
</style>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js">

  </script>
  <title>A first svelte app</title>
  ;
</svelte:head>

<main>
  <div id="main" class="content">
    <h1>Hello {name}!</h1>
    <Tiles />
  </div>
</main>
