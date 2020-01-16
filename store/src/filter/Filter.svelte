<script>
  import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from "../store/filter";
  import FilterButton from "./FilterButton.svelte";
</script>

<style>

</style>

<div class="buttons has-addons is-centered">
  <FilterButton filter={FILTER_ALL}>ALL</FilterButton>
  <FilterButton filter={FILTER_DONE}>DONE</FilterButton>
  <FilterButton filter={FILTER_UNDONE}>UNDONE</FilterButton>
</div>
