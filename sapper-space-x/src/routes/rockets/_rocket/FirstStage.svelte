<script>
  import HorizontalList from "@Components/HorizontalList.svelte";
  import Separator from "@Components/Separator.svelte";

  export let rocket;

  $: reusableItems = [
    {
      Reusable: rocket.first_stage.reusable ? "Yes" : "No"
    }
  ];
  $: enginesItems = [
    { Engines: rocket.first_stage.engines },
    { "Burn time": rocket.first_stage.burn_time_sec },
    { "Fuel amount": `${rocket.first_stage.fuel_amount_tons} tons` }
  ];
  $: thrustItems = [
    { "Thrust at sea level": `${rocket.first_stage.thrust_sea_level.kN} kn` },
    { "Vacuum thrust": `${rocket.first_stage.thrust_vacuum.kN} kn` }
  ];

  const classes = "md:mb-5";
</script>

<Separator>First stage</Separator>
<HorizontalList class={classes} items={reusableItems} />
<HorizontalList class={classes} items={enginesItems} />
<HorizontalList class={classes} items={thrustItems} />
