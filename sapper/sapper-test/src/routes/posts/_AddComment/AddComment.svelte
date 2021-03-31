<script>
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap/src";
  import { createEventDispatcher } from "svelte";
  import { store, SAVING, canClose } from "./store";
  import Inputs from "./Inputs.svelte";
  import Message from "./Message.svelte";
  import Buttons from "./Buttons.svelte";

  export let modalOpen;

  $: if (modalOpen) store.reset();

  let dispatch = createEventDispatcher();
  const onClose = () => $canClose && dispatch("close");
</script>

<Modal fade isOpen={modalOpen} toggle={onClose}>
  <ModalHeader toggle={$canClose ? onClose : undefined}>
    Add comment
  </ModalHeader>
  <div class="modal-body">
    <Inputs />
    <hr />
    <Message />
  </div>
  <div class="modal-footer">
    <Buttons on:close={onClose} />
  </div>
</Modal>

<svelte:options immutable={true} />
