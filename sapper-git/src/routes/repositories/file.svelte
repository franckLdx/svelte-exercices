<script context="module">
  import { getContent } from "@Services/blob";
  import { displayErrorPage } from "@Routes/Error.svelte";
  import { checkRepository, checkOwner, checkOid } from "@Lib/verify";

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
    return { content };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import History from "@Components/History.svelte";
  import Loading from "@Components/Loading.svelte";
  import { addItem } from "@Lib/history";
  import { getFileURL } from "@Lib/url";
  const { session, page } = stores();

  export let content;

  $session.history = addItem(
    $session.history,
    $page.query.fileName,
    getFileURL(
      $page.query.repositoryName,
      $page.query.owner,
      $page.query.fileName,
      $page.query.oid
    )
  );

  let isLoading = false;
  function onLoading() {
    isLoading = true;
  }
</script>

<Loading {isLoading} />
<History history={$session.history} on:loading={onLoading} />
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
