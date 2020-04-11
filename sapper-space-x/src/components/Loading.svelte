<script>
  import ProgressBar from "@Components/ProgressBar.svelte";
  import { afterUpdate } from "svelte";

  export let isLoading = false;

  let progress = 0;
  let increment = 0.2;
  let timeout = 15;
  let interval = undefined;

  function startAnimation() {
    isLoading = true;
    progress = 10;
    interval = setInterval(() => {
      progress = progress === 100 ? 0 : Math.min(progress + increment, 100);
    }, timeout);
  }

  function stopAnimation() {
    isLoading = false;
    clearInterval(interval);
    interval = undefined;
    progress = 0;
  }

  afterUpdate(() => {
    if (isLoading && interval === undefined) {
      startAnimation();
    } else if (!isLoading && interval !== undefined) {
      stopAnimation();
    }
  });
</script>

<div class="h-1" style={isLoading ? '' : 'visibility: hidden'}>
  <ProgressBar {progress} />
</div>
