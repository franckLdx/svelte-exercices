<script>
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap/src";
  import { createEventDispatcher } from "svelte";
  import Button from "@Components/Button.svelte";
  import Alert from "@Components/Alert.svelte";

  let dispatch = createEventDispatcher();
  const onClose = () => dispatch("close");

  export let modalOpen;
</script>

<Modal fade isOpen={modalOpen}>
  <ModalHeader>Add comment</ModalHeader>
  <ModalBody>
    <form>
      <div class="form-group">
        <label for="email">Your email</label>
        <input
          type="email"
          class="form-control"
          id="email"
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
          aria-describedby="comment's title" />
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea
          class="form-control"
          id="comment"
          rows="3"
          aria-describedby="comment" />
      </div>
    </form>
    <hr />
    <Alert color="dark" class="mt-1 mb-1">Please enter your comment</Alert>
  </ModalBody>
  <ModalFooter>
    <Button disabled>Save</Button>
    <Button on:click={onClose}>Cancel</Button>
  </ModalFooter>
</Modal>
