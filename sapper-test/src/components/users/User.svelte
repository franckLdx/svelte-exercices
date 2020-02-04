<script>
  export let user;
  import { goto } from "@sapper/app";
</script>

<style>
  .card {
    max-width: 500px;
    height: 100%;
  }
</style>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">{user.username}</p>
  </header>
  <div class="card-content">
    <div class="content">{user.name}{user.email}</div>
  </div>
</div>
