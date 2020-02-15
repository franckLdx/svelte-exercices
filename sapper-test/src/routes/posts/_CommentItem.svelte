<script>
  import Card from "@Card";
  export let comment;
</script>

<style>
  :last-child {
    margin-bottom: 0 !important;
  }
</style>

<Card>
  <div slot="title">
    <p class="h5">{comment.name}</p>
    <p class="h6 card-subtitle mt-1 ml-4 text-muted">{comment.email}</p>
  </div>
  {comment.body}
</Card>
