<script>
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap/src";
  import { createEventDispatcher } from "svelte";
  import { store } from "./_store";
  import Inputs from "./_Inputs.svelte";
  import Message from "./_Message.svelte";
  import Buttons from "./_Buttons.svelte";

  let dispatch = createEventDispatcher();
  const onClose = () => dispatch("close");

  export let modalOpen;
</script>

<Modal fade isOpen={modalOpen}>
  <ModalHeader>Add comment</ModalHeader>
  <ModalBody>
    <Inputs />
    <hr />
    <Message />
  </ModalBody>
  <ModalFooter>
    <Buttons on:close={onClose} />
  </ModalFooter>
</Modal>
