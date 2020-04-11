<script>
  export let min = 0;
  export let max = 100;
  export let progress;
  $: realProgress = ((progress - min) / max) * 100;
</script>

<div class="w-full h-full bg-gray-200">
  <div class="bg-gray-500 h-full" style={`width: ${realProgress}%`} />
</div>
