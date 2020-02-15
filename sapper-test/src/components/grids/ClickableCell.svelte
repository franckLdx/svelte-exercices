<script>
  import { goto } from "@sapper/app";

  export let link;
</script>

<style>
  .col {
    margin-bottom: 15px;
  }
  .card-header {
    overflow: auto;
  }
  .card:hover {
    cursor: pointer;
    opacity: 0.7;
    box-shadow: 10px 5px 15px;
  }
</style>

<div class="col col-11 col-lg-6" on:click={() => goto(link)}>
  <div class="card border-dark">
    <div class="card-header">
      <slot name="title" />
    </div>
    <div class="card-body">
      <div class="card-text">
        <slot />
      </div>
    </div>
  </div>
</div>
