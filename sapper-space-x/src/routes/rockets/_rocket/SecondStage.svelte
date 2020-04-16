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

  const classes = "md:mb-5";
</script>

<Title>Second stage</Title>
<HorizontalList class={classes} items={enginesItems} />
<HorizontalList class={classes} items={thrustItems} />
