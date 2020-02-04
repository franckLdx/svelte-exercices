<script>
  import { goto } from "@sapper/app";

  export let link;
</script>

<style>
  .column:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 10px 5px 15px;
  }
</style>

<div
  class="column is-half-tablet is-half-desktop is-one-half-widescreen
  is-one-third-fullhd is-narow"
  on:click={() => goto(link)}>
  <slot />
</div>
