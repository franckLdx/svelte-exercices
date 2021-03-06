<script>
  import { goto } from "@sapper/app";
  import { createEventDispatcher } from "svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import folder from "svelte-awesome/icons/folder-open-o";
  import file from "svelte-awesome/icons/file-o";
  import { parseISO, format } from "date-fns";
  import { getLastCommit } from "@Services/commit";
  import { getFolderURL, addToPath } from "@Lib/url";
  import { load } from "@Lib/history";

  export let owner;
  export let repository;
  export let path;
  export let content;

  const dispatch = createEventDispatcher();

  let width;

  function formatDate(date) {
    const dateUTC = parseISO(date);
    return format(dateUTC, "yyyy/MM/dd hh:mm a");
  }

  async function onLoading(entry) {
    dispatch("loading");
    const url = getFolderURL({
      owner,
      repository,
      path: addToPath(path, entry.name),
      oid: entry.oid,
      type: entry.type
    });
    await goto(url);
  }
</script>

<style>
  .item:nth-child(odd) {
    background: rgba(0, 0, 0, 0.05);
  }
  .item:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 10px 5px 15px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>

<div class="border border-dark pt-2 pl-2 pr-2 mb-2" bind:clientWidth={width}>
  {#each content as entry, index (entry.oid)}
    <div
      class="item border border-dark mb-2 p-2 row no-gutters"
      on:click={async () => await onLoading(entry)}>
      <span class="col col-xs-12 col-sm-6 col-lg-4">
        {#if entry.type === 'tree'}
          <span class="mr-2">
            <Icon data={folder} scale="1.25" />
          </span>
        {:else}
          <span class="mr-2">
            <Icon data={file} scale="1" />
          </span>
        {/if}
        {entry.name}
      </span>
      {#if entry.commit !== undefined}
        <span class="col col-sm-6 col-lg-3" hidden={width < 576}>
          {formatDate(entry.commit.committedDate)}
        </span>
        <span class="col" hidden={width <= 920}>{entry.commit.message}</span>
      {/if}
    </div>
  {/each}
</div>

<svelte:options immutable />
