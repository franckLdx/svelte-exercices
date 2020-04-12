<script>
  export let href;
  export let isCurrent;
  import { loadingStore } from "@Lib/store";
</script>

<li>
  <a
    class={`pt-3 pr-4 font-semibold`}
    current={isCurrent}
    aria-current={isCurrent ? 'page' : undefined}
    href={isCurrent ? undefined : href}
    on:click={!isCurrent ? () => loadingStore.setLoading(true) : ''}>
    <span
      class={isCurrent ? 'pb-2 border-b-4' : ''}
      class:cursor-wait={$loadingStore.isLoading}>
      <slot />
    </span>
  </a>
</li>
