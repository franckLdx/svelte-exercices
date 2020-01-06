<script>
  export let size = undefined;

  import { getSize } from "./func";
  $: classes = getSize(size);
</script>

<div class="tile is-ancestor {classes}">
  <slot />
</div>
