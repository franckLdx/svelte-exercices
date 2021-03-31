<script>
  export let href;
  export let isCurrent;

  import { stores } from "@sapper/app";
  const { preloading } = stores();
</script>

<li>
  <a
    class={`pt-3 pr-4 font-semibold`}
    current={isCurrent}
    aria-current={isCurrent ? 'page' : undefined}
    {href}>
    <span
      class={`link sm:p-0 md:p-1 ${isCurrent ? 'border-b-4' : ''}`}
      class:cursor-wait={$preloading}>
      <slot />
    </span>
  </a>
</li>
