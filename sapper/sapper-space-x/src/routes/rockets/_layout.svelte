<script context="module">
  import { getRockets as getRocketsRequest } from "@Services/rockets";
  import { rocketsSegment } from "@Lib/url";

  export async function preload(page, session) {
    const rockets = await getRockets(this.fetch, session);
    if (rockets.length === 0) {
      return this.error(404, "No rocket found");
    }
    if (page.path.endsWith(rocketsSegment)) {
      return this.redirect(302, getRocketUrl(rockets[0].id));
    }
    return { rockets };
  }

  async function getRockets(fetch, session) {
    if (session.rockets.length === 0) {
      session.rockets = await getRocketsRequest(fetch);
    }
    return session.rockets;
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { getRocketUrl } from "@Lib/url";
  import NavItem from "@Components/NavItem.svelte";

  export let rockets;
  export let segment;
</script>

<nav>
  <ul class="container flex flex-wrap border-b pl-3 pt-2 pb-6 mb-0 my-4">
    {#each rockets as rocket (rocket.id)}
      <NavItem isCurrent={segment === rocket.id} href={getRocketUrl(rocket.id)}>
        {rocket.name}
      </NavItem>
    {/each}
  </ul>
</nav>
<div class="container px-5 py-2">
  <slot />
</div>
