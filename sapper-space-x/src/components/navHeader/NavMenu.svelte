<script>
  import { pastLaunchesSegment } from "@Lib/url";
  import NavMenuItem from "@Components/NavHeader/NavMenuItem.svelte";

  export let segment;
</script>

<style>
  ul {
    list-style-type: none;
  }
</style>

<nav class="flex flex-wrap pl-3 pt-2 pb-6 mb-0 border-b border-gray-500 my-4">
  <img class="pr-4" src="spacex_logo_white.png" alt="SpaceX logo" />
  <ul class="flex flex-wrap">
    <NavMenuItem
      isCurrent={segment === pastLaunchesSegment}
      href={pastLaunchesSegment}>
      Launches
    </NavMenuItem>
    <NavMenuItem isCurrent={segment === 'about'} href="about">
      About
    </NavMenuItem>
  </ul>
</nav>
