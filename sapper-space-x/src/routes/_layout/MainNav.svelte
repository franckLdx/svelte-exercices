<script>
  import {
    launchesSegment,
    pastLaunchesSegment,
    rocketsSegment,
    getPastLaunchesURL,
    getRocketsUrl,
    aboutSegment,
    getAboutUrl
  } from "@Lib/url";
  import NavItem from "@Components/NavItem.svelte";

  export let path;
</script>

<style>
  ul {
    list-style-type: none;
  }
</style>

<nav class="flex flex-wrap pl-3 pt-2 pb-6 mb-0 border-b my-4">
  <img class="pr-4" src="spacex_logo_white.png" alt="SpaceX logo" />
  <ul class="flex flex-wrap">
    <NavItem
      isCurrent={path.startsWith(launchesSegment)}
      href={getPastLaunchesURL()}>
      Launches
    </NavItem>
    <NavItem isCurrent={path === rocketsSegment} href={getRocketsUrl()}>
      Rockets
    </NavItem>
    <NavItem isCurrent={path === aboutSegment} href={getAboutUrl()}>
      About
    </NavItem>
  </ul>
</nav>
