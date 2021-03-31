<script>
  import { getIsVertical, getSize } from "./func";
  export let isVertical = false;
  export let size = undefined;
  $: classes = `${getIsVertical(isVertical)} ${getSize(size)}`;
</script>

<div class="tile is-parent {classes}">
  <slot />
</div>
