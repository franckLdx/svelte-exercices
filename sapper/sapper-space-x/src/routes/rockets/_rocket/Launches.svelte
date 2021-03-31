<script>
  import Link from "@Components/Link.svelte";
  import Separator from "@Components/Separator.svelte";
  import { formatDate } from "@Lib/misc";
  import { getLaunchUrl } from "@Lib/url";

  export let launches;
</script>

<Separator>Launches</Separator>
<ol class="list-disc list-inside">
  {#each launches as launch (launch.id)}
    <li>
      <Link href={getLaunchUrl(launch.id)}>
        {launch.mission_name} - {formatDate(launch.launch_date_utc)}
      </Link>
    </li>
  {/each}
</ol>
