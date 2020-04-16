<script context="module">
  import { getRockets } from "@Services/rockets";
  import { rocketsSegment } from "@Lib/url";

  export async function preload(page) {
    const rockets = await getRockets(this.fetch);
    if (rockets.length === 0) {
      return this.error(404, "No rocket found");
    }
    if (page.path.endsWith(rocketsSegment)) {
      return this.redirect(302, getRocketUrl(rockets[0].id));
    }
    return { rockets };
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { getRocketUrl } from "@Lib/url";
  import NavMenuItem from "@Components/navheader/NavMenuItem.svelte";

  export let rockets;
  export let segment;
</script>

<nav>
  <ul class="container flex flex-wrap border-b pl-3 pt-2 pb-6 mb-0 my-4">
    {#each rockets as rocket (rocket.id)}
      <NavMenuItem
        isCurrent={segment === rocket.id}
        href={getRocketUrl(rocket.id)}>
        {rocket.name}
      </NavMenuItem>
    {/each}
  </ul>
</nav>
<div class="container px-5 py-2">
  <slot />
</div>
