<script>
  export let language;
  let className = "";
  export { className as class };
</script>

<style>
  .language {
    padding: 10px;
  }
</style>

<span
  class={`${className} language badge`}
  style="background-color:{language.color}">
  {language.name}
</span>

<svelte:options immutable />
