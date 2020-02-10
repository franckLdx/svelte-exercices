<script>
  import { goto } from "@sapper/app";

  export let link;
  export let title;
</script>

<style>
  .col {
    margin-bottom: 15px;
  }
  .card-header {
    min-height: 6em;
    overflow: auto;
  }
  .card:hover {
    cursor: pointer;
    opacity: 0.7;
    box-shadow: 10px 5px 15px;
  }
</style>

<div class="col col-11 col-lg-6">
  <div class="card border-dark" on:click={() => goto(link)}>
    <div class="card-header">
      <h5>{title}</h5>
    </div>
    <div class="card-body">
      <div class="card-text">
        <slot />
      </div>
    </div>
  </div>
</div>
