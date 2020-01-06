<script>
  import ParentTile from "./tile/ParentTile.svelte";
  import AncestorTile from "./tile/AncestorTile.svelte";
  import Tile from "./tile/TileDispatch.svelte";
  let currentId = 1;
  setTimeout;
  const onClick = event => {
    currentId = event.detail.id;
  };
  $: getColor = id => (currentId === id ? "danger" : undefined);
</script>

<style>

</style>

<section class="section">
  <AncestorTile>
    <ParentTile isVertical size={4}>
      <Tile id={1} color={getColor(1)} on:clicked={onClick}>
        <div slot="title">TILE 1</div>
        <p>bla</p>
      </Tile>
      <Tile id={2} color={getColor(2)} on:clicked={onClick}>
        <div slot="title">TILE 2</div>
        <p>foo</p>
        <p>bar</p>
      </Tile>
    </ParentTile>
    <ParentTile size={6}>
      <Tile id={3} color={getColor(3)} on:clicked={onClick}>
        <div slot="title">TILE 3</div>
        <p>bla</p>
        <p>bla bla</p>
        <p>bla bla bla</p>
      </Tile>
    </ParentTile>
  </AncestorTile>
</section>
