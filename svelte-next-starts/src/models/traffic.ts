export interface TraficInfo {
  line: string;
  slug: string;
  title: string;
  message: string;
}

export interface Trafic {
  metros: TraficInfo[];
  rers: TraficInfo[];
  tramways: TraficInfo[];
}