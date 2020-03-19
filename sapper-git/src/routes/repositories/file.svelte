<script context="module">
  import { getContent } from "@Services/blob";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { checkRepository, checkOwner, checkOid } from "@Lib/verify";

  export async function preload(page) {
    const { repositoryName, owner, oid } = page.query;
    if (
      !checkRepository(repositoryName) ||
      !checkOwner(owner) ||
      !checkOid(oid)
    ) {
      return this.error(400, "Bad parameters");
    }
    const content = await getContent(this.fetch, repositoryName, owner, oid);
    if (content === undefined) {
      return this.error(404, "File content not found");
    }
    return { content };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import History from "@Components/History.svelte";
  import Loading from "@Components/Loading.svelte";
  import { addItem } from "@Lib/history";
  import { getFileURL } from "@Lib/url";

  const { session } = stores();

  export let content;
  let isLoading = false;
  function onLoading() {
    isLoading = true;
  }
</script>

<Loading {isLoading} />
<History history={session.history} on:loading={onLoading} />
<article class="card">
  <div class="card-body">
    {@html content
      .replace(/\r\n/g, '<br/>')
      .replace(/\n/g, '<br/>')
      .replace(/\r/g, '<br/>')
      .replace(/\s/g, '&nbsp')}
  </div>
</article>
<svelte:options immutable />
