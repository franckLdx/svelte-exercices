<script context="module">
  import { getTree } from "@Services/tree";
  import { addCommitToEntries } from "@Services/commit";
  import {
    checkRepository,
    checkFolder,
    checkOwner,
    checkOid
  } from "@Lib/verify";

  export async function preload(page) {
    const { repository: repositoryName, owner, folderName, oid } = page.query;
    if (
      !checkRepository(repositoryName) ||
      !checkOwner(owner) ||
      !checkFolder(folderName) ||
      !checkOid(oid)
    ) {
      return this.error(400, "Bad parameters");
    }
    const entries = await getTree(this.fetch, repositoryName, owner, oid);
    await addCommitToEntries(this.fetch, entries, repositoryName, owner);
    return {
      repositoryName,
      owner,
      folderName,
      entries
    };
  }
</script>

<script>
  import Folder from "@Repositories/_Folder.svelte";
  export let entries;
  export let owner;
  export let repositoryName;
  export let folderName;
</script>

It works !
<Folder {owner} {repositoryName} {entries} />
