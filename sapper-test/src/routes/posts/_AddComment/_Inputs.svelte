<script>
  import { store } from "./_store";
</script>

<form>
  <div class="form-group">
    <label for="email">Your email</label>
    <input
      type="email"
      class="form-control"
      id="email"
      value={$store.email}
      on:input={event => store.setEmail(event.currentTarget.value)}
      aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  <div class="form-group">
    <label for="title">Title</label>
    <input
      type="text"
      class="form-control"
      id="title"
      value={$store.name}
      on:input={event => store.setName(event.currentTarget.value)}
      aria-describedby="comment's title" />
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea
      class="form-control"
      id="comment"
      rows="3"
      value={$store.body}
      on:input={event => store.setBody(event.currentTarget.value)}
      aria-describedby="comment" />
  </div>
</form>

<svelte:options immutable={true} />
