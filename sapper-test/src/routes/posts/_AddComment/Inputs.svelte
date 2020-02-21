<script>
  import { store } from "./store";
  const setter = fieldName => event =>
    store.setField(fieldName, event.currentTarget.value);
</script>

<form>
  <div class="form-group">
    <label for="email">Your email</label>
    <input
      type="email"
      class="form-control"
      id="email"
      value={$store.email}
      on:input={setter('email')}
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
      on:input={setter('name')}
      aria-describedby="comment's title" />
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea
      class="form-control"
      id="comment"
      rows="3"
      value={$store.body}
      on:input={setter('body')}
      aria-describedby="comment(s content" />
  </div>
</form>

<svelte:options immutable={true} />
