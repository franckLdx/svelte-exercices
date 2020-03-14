<script context="module">
  import { getContent } from "@Services/blob";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { checkRepository, checkOwner, checkOid } from "@Lib/verify";

  export function getURL(repositoryName, login, fileName, oid) {
    return `/repositories/file?repository=${repositoryName}&owner=${login}&fileName=${fileName}&oid=${oid}`;
  }

  export async function preload(page) {
    const { repository: repositoryName, owner, oid } = page.query;
    if (
      !checkRepository(repositoryName) ||
      !checkRepository(owner) ||
      !checkOid(oid)
    ) {
      return this.error(400, "Bad parameters");
    }
    const content = await getContent(this.fetch, repositoryName, owner, oid);
    return {
      content
    };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import History from "@Components/History.svelte";
  import { addItem } from "@Lib/history";

  export let content;
</script>

<!-- <History history={session.history} /> -->
{@html content
  .replace(/\r\n/g, '<br/>')
  .replace(/\n/g, '<br/>')
  .replace(/\r/g, '<br/>')
  .replace(/\s/g, '&nbsp')}

<svelte:options immutable />
