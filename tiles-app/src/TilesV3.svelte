<script>
  import ParentTile from "./tile/ParentTile.svelte";
  import AncestorTile from "./tile/AncestorTile.svelte";
  import Tile from "./tile/TileV3.svelte";
</script>

<style>

</style>

<section class="section">
  <AncestorTile>
    <ParentTile isVertical size={4}>
      <Tile>
        <div slot="title">TILE 1</div>
        <p>bla</p>
      </Tile>
      <Tile>
        <div slot="title">TILE 2</div>
        <p>foo</p>
        <p>bar</p>
      </Tile>
    </ParentTile>
    <ParentTile size={6}>
      <Tile color="danger">
        <div slot="title">TILE 3</div>
        <p>bla</p>
        <p>bla bla</p>
        <p>bla bla bla</p>
      </Tile>
    </ParentTile>
  </AncestorTile>
</section>
