<script>
  import { beforeUpdate, afterUpdate, onMount } from "svelte";

  export let isLoading = false;
  export let initial = 1;
  export let incement = 4;
  export let timeout = 300;

  let progress = 0;
  let interval = undefined;
  let hidden = false;

  const startAnimation = () => {
    progress = initial;
    interval = setInterval(() => {
      progress = Math.min(progress + incement, 100);
    }, timeout);
  };

  const stopAnimation = () => {
    clearInterval(interval);
    interval = undefined;
    hidden = true;
    setTimeout(() => {
      progress = 0;
      hidden = false;
    }, 500);
  };

  afterUpdate(() => {
    if (isLoading && interval === undefined) {
      startAnimation();
    } else if (!isLoading && interval !== undefined) {
      stopAnimation();
    }
  });

  onMount(() => stopAnimation);
</script>

<div class="progress fixed-top" style="height: 9px;">
  <div
    class="progress-bar bg-success progress-bar-striped"
    {hidden}
    role="progressbar"
    aria-valuenow="0"
    aria-valuemin="0"
    aria-valuemax="100"
    style={`width: ${progress}%`} />
</div>

<svelte:options immutable />
