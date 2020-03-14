<script>
  export let history;
  let previous, current;
  const home = { name: "Home", path: "/" };
  $: {
    previous = [home, ...history.slice(0, history.length - 1)];
    current = history[history.length - 1];
  }
</script>

<nav aria-label="history">
  <ol class="breadcrumb">
    {#each previous as item (item.path)}
      <li class="breadcrumb-item" aria-current={`back to ${item.name}`}>
        <a href={item.path}>{item.name}</a>
      </li>
    {/each}
    <li class="breadcrumb-item active" aria-current={`current page`}>
      {current.name}
    </li>
  </ol>
</nav>

<svelte:options immutable />
