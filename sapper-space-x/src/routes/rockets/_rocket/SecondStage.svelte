<script>
  import HorizontalList from "@Components/HorizontalList.svelte";
  import Title from "./Title.svelte";

  export let rocket;

  $: enginesItems = [
    { Engines: rocket.second_stage.engines },
    { "Burn time": rocket.second_stage.burn_time_sec },
    { "Fuel amount": `${rocket.second_stage.fuel_amount_tons} tons` }
  ];
  $: thrustItems = [{ Thrust: `${rocket.second_stage.thrust.kN} kn` }];

  const marginBottom = "mb-5";
</script>

<Title>Second stage</Title>
<HorizontalList class={marginBottom} items={enginesItems} />
<HorizontalList class={marginBottom} items={thrustItems} />
