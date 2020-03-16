<script context="module">
  import { getTree } from "@Services/tree";
  import { getEntriesWhithCommit } from "@Services/commit";
  import {
    checkRepository,
    checkFolder,
    checkParentPath,
    checkOwner,
    checkOid
  } from "@Lib/verify";
  import { getPath } from "@Lib/url";

  export async function preload(page) {
    const { owner, repositoryName, parentPath, folderName, oid } = page.query;
    if (
      !checkOwner(owner) ||
      !checkRepository(repositoryName) ||
      !checkParentPath(parentPath) ||
      !checkFolder(folderName) ||
      !checkOid(oid)
    ) {
      return this.error(400, "Bad parameters");
    }
    const rawEntries = await getTree(this.fetch, repositoryName, owner, oid);
    const entries = await getEntriesWhithCommit({
      fetch: this.fetch,
      owner,
      repositoryName,
      parentPath: getPath(parentPath, folderName),
      entries: rawEntries
    });
    return {
      owner,
      repositoryName,
      parentPath,
      folderName,
      entries
    };
  }
</script>

<script>
  import Folder from "@Repositories/_Folder.svelte";
  import Loading from "@Components/Loading.svelte";
  import History from "@Components/History.svelte";
  import { addItem } from "@Lib/history";
  import { getFolderURL } from "@Lib/url";

  export let owner;
  export let repositoryName;
  export let parentPath;
  export let folderName;
  export let entries;

  let isLoading = false;
  function onLoading() {
    isLoading = true;
  }
</script>

<Loading {isLoading} />
<!-- <History history={$session.history} on:loading={onLoading} /> -->
<Folder {owner} {repositoryName} {parentPath} {folderName} {entries} />

<svelte:options immutable />
