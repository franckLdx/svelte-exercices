<script>
  export let comment;
</script>

<style>
  :last-child {
    margin-bottom: 0 !important;
  }
</style>

<div class="border border-dark rounded-lg px-3 py-2 mb-3">
  <div class="border-bottom border-dark">
    <h6>{comment.name}</h6>
  </div>
  {comment.body}
</div>
