<script>
  import Posts from "./Posts/Posts.svelte";
  let userId = 1;
</script>

<style>

</style>

<main class="container">
  <div class="field">
    <div class="control">
      <label class="label">UserId</label>
      <input class="input is-info" type="text" bind:value={userId} />
    </div>
  </div>
  <Posts userId={`${userId}`} />
</main>
