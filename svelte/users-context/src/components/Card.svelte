<script>
  export let title;
</script>

<div class="card has-background-white-ter">
  <header class="card-header">
    <p class="card-header-title">{title}</p>
  </header>
  <div class="card-content">
    <div class="content">
      <slot />
    </div>
  </div>
</div>
