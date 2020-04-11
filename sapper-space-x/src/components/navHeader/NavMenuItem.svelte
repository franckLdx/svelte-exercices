<script>
  export let href;
  export let current;
  import { loadingStore } from "@Lib/store";
</script>

<li>
  <a
    class={`pt-3 pr-4 font-semibold`}
    {current}
    aria-current={current ? 'page' : undefined}
    href={current ? undefined : href}
    on:click={() => loadingStore.setLoading(true)}>
    <span class={current ? 'pb-2 border-b-4' : ''}>
      <slot />
    </span>
  </a>
</li>
