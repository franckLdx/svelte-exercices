<script>
  import { stores } from "@sapper/app";

  export let href;

  const { preloading } = stores();
</script>

<a class="text-link link" class:cursor-wait={$preloading} {href}>
  <slot />
</a>
