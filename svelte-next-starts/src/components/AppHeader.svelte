<script lang="ts">
  import { AppBar } from "svelte-materialify/src";
  import Menu from "./destinations/Menu.svelte";
</script>

<AppBar dense>
  <span slot="title" class="font-weight-bold">Prochain départ</span>
  <Menu />
</AppBar>
