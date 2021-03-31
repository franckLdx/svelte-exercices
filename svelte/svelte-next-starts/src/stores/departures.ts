import { derived } from "svelte/store";
import { scheduledDepartures } from "../api/ratp";
import type { Departure } from "../models/departure";
import type { DepartureStation } from "../models/destinations";
import { CurrentDetinationInfoStore, currentDetinationInfoStore } from "./destinations";

let timeout: number = undefined;

export const departures = derived<CurrentDetinationInfoStore, Departure[]>(
  currentDetinationInfoStore,
  ($currentDetinationInfoStore, set) => {
    set([]);
    if ($currentDetinationInfoStore === undefined) {
      return;
    }
    const triggeringDestinationName = $currentDetinationInfoStore.name;
    clearTimeout(timeout);
    foo($currentDetinationInfoStore, triggeringDestinationName, set);
    timeout = setTimeout(() => {
      foo($currentDetinationInfoStore, triggeringDestinationName, set);
    }, 60000);
    return () => clearTimeout(timeout);
  }
);

function foo($currentDetinationInfoStore: any, triggeringDestinationName: any, set: any) {
  const departurePromises = $currentDetinationInfoStore.departuresStation.map(makeDeparture);
  Promise.all(departurePromises).then(unsortedDepartures => {
    const sortedDepartures = unsortedDepartures.sort(sortByNextScheduledDeparture);
    if (triggeringDestinationName === $currentDetinationInfoStore.name) {
      set(sortedDepartures);
    }
  });
}

async function makeDeparture(departure: DepartureStation): Promise<Departure> {
  const schedules = await scheduledDepartures(departure);
  return { ...departure, schedules };
}

function sortByNextScheduledDeparture(departure1: Departure, departure2: Departure) {
  const scheduledDeparture1 = canocicalSchedule(departure1.schedules[0]);
  const scheduledDeparture2 = canocicalSchedule(departure2.schedules[0]);
  if (isNaN(scheduledDeparture1)) {
    return -1
  };
  if (isNaN(scheduledDeparture2)) {
    return 1
  };
  if (scheduledDeparture1 < scheduledDeparture2) {
    return -1
  } else if (scheduledDeparture1 === scheduledDeparture2) {
    return 0
  } else {
    return 1;
  }
}

const canocicalSchedule = (schedule: string) => parseInt(schedule.replace("ms", "").trim());