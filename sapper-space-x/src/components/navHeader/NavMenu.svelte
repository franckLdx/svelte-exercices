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

<nav class="container pl-3 pt-2 pb-5 border-b border-gray-500 my-3">
  <ul>
    <NavMenuItem
      disabled={segment === pastLaunchesSegment}
      href={pastLaunchesSegment}>
      Past Launches
    </NavMenuItem>
    <NavMenuItem disabled={segment === 'about'} href="about">About</NavMenuItem>
    <NavMenuItem disabled={segment === 'blog'} href="blog">Blog</NavMenuItem>
  </ul>
</nav>
