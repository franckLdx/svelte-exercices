<script>
  import Button from "sveltestrap/src/Button.svelte";
  import Modal from "sveltestrap/src/Modal.svelte";
  export let isLoading = false;
</script>

<style>
  .modal-body {
    padding: 20px 20px;
  }
</style>

<Modal
  class="modal-dialog-centered"
  isOpen={isLoading}
  aria-label="Please wait while loading message">
  <div class="modal-body text-center">
    <p class="h4">Loading...</p>
    <div class="progress">
      <div
        class="progress-bar bg-info progress-bar-striped progress-bar-animated"
        role="progressbar"
        style="width: 100%" />
    </div>
  </div>
</Modal>
