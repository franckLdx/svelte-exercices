<script>
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from "sveltestrap/src";

  export let modalOpen;
</script>

<Modal isOpen={modalOpen}>
  <ModalHeader>Add comment</ModalHeader>
  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </ModalBody>
  <ModalFooter>
    <Button outline color="dark">Save</Button>
    <Button outline color="dark">Cancel</Button>
  </ModalFooter>
</Modal>
