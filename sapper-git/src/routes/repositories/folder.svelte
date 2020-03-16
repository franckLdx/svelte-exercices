<script context="module">
  import { getTree } from "@Services/tree";
  import { getEntriesWhithCommit } from "@Services/commit";
  import {
    checkRepository,
    checkFolder,
    checkOwner,
    checkOid
  } from "@Lib/verify";

  export async function preload(page) {
    const {
      owner,
      repository: repositoryName,
      parentPath,
      folderName,
      oid
    } = page.query;
    if (
      !checkRepository(repositoryName) ||
      !checkOwner(owner) ||
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
      parentPath: parentPath ? `${parentPath}/${folderName}` : folderName,
      entries: rawEntries
    });
    return {
      oid,
      repositoryName,
      owner,
      folderName,
      entries,
      parentPath
    };
  }
</script>

<script>
  import Folder from "@Repositories/_Folder.svelte";
  import Loading from "@Components/Loading.svelte";
  import History from "@Components/History.svelte";
  import { addItem } from "@Lib/history";
  import { getFolderURL } from "@Lib/url";
  import { stores } from "@sapper/app";

  const { page, session } = stores();

  export let owner;
  export let repositoryName;
  export let parentPath;
  export let folderName;
  export let oid;
  export let entries;

  let isLoading = false;
  function onLoading() {
    isLoading = true;
  }

  $: $session.history = addItem(
    $session.history,
    folderName,
    getFolderURL({ owner, repositoryName, parentPath, folderName, oid })
  );
</script>

<Loading {isLoading} />
<History history={$session.history} on:loading={onLoading} />
<Folder {owner} {repositoryName} {parentPath} {folderName} {entries} />

<svelte:options immutable />
