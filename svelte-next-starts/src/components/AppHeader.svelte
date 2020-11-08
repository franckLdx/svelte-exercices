<script lang="ts">
  import { AppBar, Menu, List, ListItem, Button } from "svelte-materialify/src";
</script>

<AppBar class="primary-color" dense>
  <span slot="title">Prochain départ</span>
  <Menu hover>
    <div slot="activator">
      <Button class="primary-color ml-3 mb-0">Activate</Button>
    </div>
    <List>
      <ListItem>Option 1</ListItem>
      <ListItem>Option 2</ListItem>
      <ListItem>This is Cool</ListItem>
    </List>
  </Menu>
</AppBar>
