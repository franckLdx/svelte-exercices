<script>
  import { goto } from "@sapper/app";
  import Card from "../Card.svelte";

  export let link;
</script>

<style>
  .col {
    margin-bottom: 15px;
  }

  .clickable:hover {
    cursor: pointer;
    opacity: 0.7;
    box-shadow: 10px 5px 15px;
  }
</style>

<div class="col col-11 col-lg-6" on:click={() => goto(link)}>
  <div class="clickable">
    <slot />
  </div>
</div>
