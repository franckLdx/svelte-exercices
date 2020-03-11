<script context="module">
  import { getContent } from "@Services/blob";
  import { displayErrorPage } from "@Routes/Error.svelte";

  export function getURL(name, login, oid) {
    return `/repositories/file?name=${name}&owner=${login}&oid=${oid}`;
  }

  const validator = RegExp(/^[\w\-]{1,100}$/);

  export async function preload(page) {
    const { name, owner, oid } = page.query;
    if (
      !name ||
      !validator.test(name) ||
      !owner ||
      !validator.test(owner) ||
      !oid ||
      !validator.test(oid)
    ) {
      return this.error(400, "Bad parameters");
    }
    const content = await getContent(this.fetch, name, owner, oid);
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
