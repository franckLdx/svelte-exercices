<script lang="ts">
  import type { TraficInfo } from "../models/traffic";

  export let trafficInfo: TraficInfo;
</script>

<article>
  <div class="mt-3">Ligne {trafficInfo.line} - {trafficInfo.title}</div>
  <div class="mt-2 ml-2">{trafficInfo.message}</div>
</article>
