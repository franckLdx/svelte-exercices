<script>
  export let icon;
  $: icon = "far " + icon;
</script>

<span class="icon">
  <i class={icon} />
</span>

<svelte:options immutable />
