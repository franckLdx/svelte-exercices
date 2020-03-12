<script context="module">
  import { getContent } from "@Services/blob";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { checkRepository, checkOwner, checkOid } from "@Lib/verify";

  export function getURL(repositoryName, login, oid) {
    return `/repositories/file?repository=${repositoryName}&owner=${login}&oid=${oid}`;
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
  export let content;
</script>

And the content is:
<br />
{@html content
  .replace(/\r\n/g, '<br/>')
  .replace(/\n/g, '<br/>')
  .replace(/\r/g, '<br/>')
  .replace(/\s/g, '&nbsp')}
