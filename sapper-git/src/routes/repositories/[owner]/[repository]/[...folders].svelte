<script context="module">
  import { getTree } from "@Services/tree";
  import { getBlobContent } from "@Services/blob";
  import { getEntriesWhithCommit } from "@Services/commit";
  import {
    checkRepository,
    checkFolders,
    checkOwner,
    checkOid,
    checkType
  } from "@Lib/verify";
  import { addToPath, getPath } from "@Lib/url";

  export async function preload(page) {
    const { owner, repository, folders } = page.params;
    const { oid, type } = page.query;

    if (
      !checkOwner(owner) ||
      !checkRepository(repository) ||
      !checkFolders(folders) ||
      !checkOid(oid) ||
      !checkType(type)
    ) {
      return this.error(400, "Bad parameters");
    }
    const path = getPath(folders);
    const content =
      type === "tree"
        ? await getTree(this.fetch, repository, owner, oid)
        : await getBlobContent(this.fetch, repository, owner, oid);
    return {
      owner,
      repository,
      path,
      content,
      type
    };
  }
</script>

<script>
  import Folder from "@Components/Folder.svelte";
  import File from "@Components/File.svelte";
  import Loading from "@Components/Loading.svelte";
  import History from "@Components/History.svelte";
  import { getFolderURL } from "@Lib/url";

  export let owner;
  export let repository;
  export let path;
  export let content;
  export let type;

  let isLoading = false;
  function onLoading() {
    isLoading = true;
  }
</script>

<Loading {isLoading} />
<!-- <History history={session.history} on:loading={onLoading} /> -->
{#if type === 'tree'}
  <Folder {owner} {repository} {path} {content} />
{:else}
  <File {content} />
{/if}

<svelte:options immutable />
