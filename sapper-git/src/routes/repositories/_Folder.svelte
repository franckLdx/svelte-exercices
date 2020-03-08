<script>
  import { getLastCommit } from "@Services/commit";

  export let entries;

  let width;
</script>

<style>
  .item:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 10px 5px 15px;
    font-weight: bold;
    background-color: blanchedalmond;
  }
</style>

<div class="border border-dark pt-2 pl-2 pr-2 mb-2" bind:clientWidth={width}>
  {#each entries as entry (entry.oid)}
    <div class="item border border-dark mb-2 p-2 row no-gutters">
      <span class="col col-xs-12 col-sm-6 col-lg-4">{entry.name}</span>
      <span class="col col-sm-6 col-lg-3" hidden={width < 576}>
        {entry.commit.committedDate}
      </span>
      <span class="col" hidden={width <= 920}>{entry.commit.message}</span>
    </div>
  {/each}
</div>
