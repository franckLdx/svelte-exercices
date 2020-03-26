<script context="module">
  import { goto } from "@sapper/app";
  import { checkErrorStatus, checkErrorStatusMessage } from "@Lib/verify";

  export function displayErrorPage(err) {
    console.error(err);
    goto(`/error?message=${err.message}`);
  }

  export async function preload(page) {
    const status = page.query.status;
    const error = page.query.message || "unknwon error";
    if (!checkErrorStatus(status) || !checkErrorStatusMessage(error)) {
      return { status: 500, error: "unknwon error" };
    }
    return {
      status,
      error
    };
  }
</script>

<script>
  import Error from "@Routes/_error.svelte";
  export let status;
  export let error;
</script>

<Error {status} {error} />

<svelte:options immutable />
