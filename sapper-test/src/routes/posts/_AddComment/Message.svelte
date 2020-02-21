<script>
  import Alert from "@Components/Alert.svelte";
  import { store, EDITING, SAVING, SAVED } from "./store";

  let message;
  $: {
    switch ($store.state) {
      case EDITING:
        message = "Please enter your comment";
        break;
      case SAVING:
        message = "Saving...";
        break;
      case SAVED:
        "Successfully saved";
        break;
      case ERROR:
        "Oups, Failed to save comment !";
        break;
      default:
        message = "";
        break;
    }
  }
</script>

<Alert color="dark" class="mt-1 mb-1">{message}</Alert>

<svelte:options immutable={true} />
