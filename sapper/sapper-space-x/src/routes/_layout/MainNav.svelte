<script>
  import {
    launchesSegment,
    rocketsSegment,
    shipsSegment,
    getLaunchesPageUrl,
    getRocketsUrl,
    getShipsPageUrl,
    aboutSegment,
    getAboutUrl
  } from "@Lib/url";
  import NavItem from "@Components/NavItem.svelte";

  export let path;
</script>

<nav class="flex flex-wrap pl-3 pt-2 pb-6 mb-0 border-b my-4">
  <img class="pr-4" src="spacex_logo_white.png" alt="SpaceX logo" />
  <ul class="flex flex-wrap">
    <NavItem
      isCurrent={path.startsWith(launchesSegment)}
      href={getLaunchesPageUrl()}>
      Launches
    </NavItem>
    <NavItem isCurrent={path.startsWith(rocketsSegment)} href={getRocketsUrl()}>
      Rockets
    </NavItem>
    <NavItem isCurrent={path.startsWith(shipsSegment)} href={getShipsPageUrl()}>
      Ships
    </NavItem>
    <NavItem isCurrent={path === aboutSegment} href={getAboutUrl()}>
      About
    </NavItem>
  </ul>
</nav>
