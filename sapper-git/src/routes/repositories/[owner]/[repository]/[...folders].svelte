<script context="module">
  import { getTreeContent } from "@Services/tree";
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
  import { addItem } from "@Lib/history";

  export async function preload(page, session) {
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
        ? await getTreeContent({
            fetch: this.fetch,
            owner,
            repository,
            resourcePath: path,
            oid
          })
        : await getBlobContent(this.fetch, owner, repository, oid);

    const url = getFolderURL({
      owner,
      repository,
      path,
      oid,
      type
    });
    const name = folders[folders.length - 1];
    session.history = addItem(session.history, name, url);

    return {
      owner,
      repository,
      path,
      content,
      type,
      history: session.history,
      isLoading: false
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
  export let history;

  export let isLoading = false;
  function onLoading() {
    isLoading = true;
  }
</script>

<Loading {isLoading} />
<History {history} on:loading={onLoading} />
{#if type === 'tree'}
  <Folder {owner} {repository} {path} {content} />
{:else}
  <File {content} />
{/if}

<svelte:options immutable />
