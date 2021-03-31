<script>
  import { onMount } from "svelte";
  import Icon from "svelte-awesome";
  import circle1 from "svelte-awesome/icons/hourglass-1";
  import circle2 from "svelte-awesome/icons/hourglass-2";
  import circle3 from "svelte-awesome/icons/hourglass-3";

  const icons = [circle1, circle2, circle3];

  let idx = 0;
  onMount(() => {
    const interval = setInterval(
      () => (idx = idx < icons.length ? idx + 1 : 0),
      450
    );
    return () => clearInterval(interval);
  });
</script>

<Icon data={icons[idx]} scale="1.3" />

<svelte:options immutable />
