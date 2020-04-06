<script>
  import Youtube from "@sveltecasts/svelte-youtube/src/index.svelte";

  let className = "";
  export { className as class };

  export let videoLink;
  let videoId;
  $: {
    if (videoLink) {
      let matches = videoLink.match(/https:\/\/youtu.be\/(\w+)/);
      const isMatch = () => matches && matches.length >= 2;
      if (!isMatch()) {
        matches = videoLink.match(/https:\/\/www.youtube.com\/watch\?v=(\w+)/);
      }
      if (isMatch()) {
        videoId = matches[1];
      }
    }
  }
</script>

{#if videoId}
  <div class={className}>
    <Youtube {videoId} />
  </div>
{/if}
