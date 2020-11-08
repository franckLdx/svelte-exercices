<script lang="ts">
  import { traficApi } from "../../api/ratp";
  import Loading from "../Loading.svelte";
  import Info from "./Info.svelte";

  async function getTrafficMetroInfo() {
    const trafficInfo = await traficApi();
    return trafficInfo.metros.filter(({ slug }) => slug !== "normal");
  }

  const metroTrafficPromise = getTrafficMetroInfo();
</script>

<section class="pl-3 pr-3">
  {#await metroTrafficPromise}
    <Loading />
  {:then metroTraffic}
    {#each metroTraffic as trafficInfo (trafficInfo.line)}
      <Info {trafficInfo} />
    {/each}
  {:catch error}
    OUPS
    {error}
  {/await}
</section>
