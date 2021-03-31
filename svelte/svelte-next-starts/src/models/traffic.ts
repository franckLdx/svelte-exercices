import type { LineType } from "./line";

export interface TraficInfo {
  line: LineType;
  slug: string;
  title: string;
  message: string;
}

export interface Trafic {
  metros: TraficInfo[];
  rers: TraficInfo[];
  tramways: TraficInfo[];
}
