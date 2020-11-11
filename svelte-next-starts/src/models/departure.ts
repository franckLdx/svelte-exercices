import type { DepartureStation } from "./destinations";


export type Departure = DepartureStation & { schedules: string[] } 