<script>
  import { onMount } from "svelte";
  export let thumbnails;
  let className;
  export { className as class };

  let index = 0;

  function next() {
    index = index < thumbnails.length - 1 ? index + 1 : 0;
  }

  function pickInterval() {
    const min = 2500;
    const max = 4000;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  onMount(() => {
    const interval = setInterval(next, pickInterval());
    return () => clearTimeout(interval);
  });
</script>

<img class={className} src={thumbnails[index]} alt="Mission image" />
