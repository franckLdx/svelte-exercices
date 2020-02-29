<script>
  $: ariaLabel = $$props["aria-label"];
  export let disabled;
  export let active;
</script>

<li class="page-item" class:active class:disabled>
  <button type="button" class="btn page-link" aria-label={ariaLabel} {disabled}>
    <slot />
  </button>
</li>

<svelte:options immutable />
