<script>
  import Link from "@Components/Link.svelte";
  import Title from "./Title.svelte";
  import { formatDate } from "@Lib/misc";
  import { getLaunchUrl } from "@Lib/url";

  export let launches;
</script>

<Title>Launches</Title>
<ol class="list-disc list-inside">
  {#each launches as launch (launch.id)}
    <li>
      <Link href={getLaunchUrl(launch.id)}>
        {launch.mission_name} - {formatDate(launch.launch_date_utc)}
      </Link>
    </li>
  {/each}
</ol>
