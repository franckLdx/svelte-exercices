<script context="module">
  import { goto } from "@sapper/app";

  export function displayErrorPage(err) {
    console.error(err);
    goto(`/error?message=${err.message}`);
  }

  export async function preload(page) {
    const message = page.query.message || "unknwon error";
    return {
      status: page.query.status || 503,
      error: { message }
    };
  }
</script>

<script>
  import Error from "@Routes/_error.svelte";
  export let status;
  export let error;
</script>

<Error {status} {error} />
