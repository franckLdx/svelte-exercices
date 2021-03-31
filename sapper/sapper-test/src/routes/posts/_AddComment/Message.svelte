<script>
  import Alert from "@Components/Alert.svelte";
  import { store, EDITING, SAVING, SAVED, ERROR } from "./store";
  import { AddComment } from "@Services";

  let message;
  $: {
    switch ($store.state) {
      case EDITING:
        message = "Please enter your email, the title and the comment";
        break;
      case SAVING:
        message = "Saving...";
        break;
      case SAVED:
        message = "Successfully saved";
        break;
      case ERROR:
        message = "Oups, Failed to save comment !";
        break;
      default:
        message = "";
        break;
    }
  }
</script>

<Alert color="dark" class="mt-1 mb-1">{message}</Alert>

<svelte:options immutable={true} />
