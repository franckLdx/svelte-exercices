export interface Launch {
  mission_name: string;
  details: string | null;
  links: {
    mission_patch_small: string | null;
  }
}