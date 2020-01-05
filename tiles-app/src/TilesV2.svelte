<script>
  import Tile from "./tile/TileV2.svelte";
</script>

<section class="section">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-vertical is-4">
      <Tile title="TILE 1">
        <p>Bla</p>
      </Tile>
      <Tile title="TILE 2">
        <p>foo</p>
        <p>bar</p>
      </Tile>
    </div>
    <div class="tile is-parent is-vertical is-6">
      <Tile title="TILE 3" color="danger">
        <p>bla</p>
        <p>bla bla</p>
        <p>bla bla bla</p>
      </Tile>
    </div>
  </div>
</section>
