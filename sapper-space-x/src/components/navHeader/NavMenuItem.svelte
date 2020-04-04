<script>
  export let href;
  export let disabled;
</script>

<style>
  li {
    list-style-type: none;
    display: inline-block;
  }
</style>

<li>
  <a
    class="linkPill"
    class:disabled
    {disabled}
    aria-disabled={disabled ? 'page' : undefined}
    {href}>
    <slot />
  </a>
</li>
