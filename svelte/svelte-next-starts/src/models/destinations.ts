import { Line, Way, line_118, line_127 } from "./line";
import { grandsPechers, laPaix, Station, verdun } from "./stations";

export interface DepartureStation {
  line: Line;
  way: Way;
  station: Station;
}

export interface Destination {
  name: string;
  departuresStation: DepartureStation[];
}

export type Destinations = Destination[];

export const defaultDestinations: Destinations = [
  {
    name: "Conservatoire",
    departuresStation: [{
      line: line_118,
      way: 'R',
      station: verdun,
    }, {
      line: line_127,
      way: 'A',
      station: laPaix,
    }]
  },
  {
    name: "Travail",
    departuresStation: [
      {
        line: line_118,
        way: 'R',
        station: grandsPechers
      }
    ]
  }
];
