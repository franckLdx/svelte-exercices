<script>
  export let imgUrl;
  export let altImg;

  let className = "";
  export { className as class };
</script>

<div class={`${className} flex`}>
  {#if imgUrl}
    <img class="w-40 object-scale-down mr-3" src={imgUrl} alt={altImg} />
  {/if}
  <div class="relative" style="top:0.3em">
    <slot />
  </div>
</div>
