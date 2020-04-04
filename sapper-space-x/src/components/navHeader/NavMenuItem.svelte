<script>
  export let href;
  export let current;
</script>

<li>
  <a
    class={`pt-3 pr-4 font-semibold`}
    {current}
    aria-current={current ? 'page' : undefined}
    href={current ? undefined : href}>
    <span class={current ? 'pb-2 border-b-4' : ''}>
      <slot />
    </span>
  </a>
</li>
