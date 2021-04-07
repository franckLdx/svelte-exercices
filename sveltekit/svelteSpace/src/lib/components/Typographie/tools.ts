import type { ElementType } from "../elements";

export const getClamp = (clamp: number | null | undefined): string => clamp ? `line-clamp-${clamp}` : 'line-clamp-none';

export const getTypo = (elementType: ElementType): string => `text-${elementType} font-${elementType} text-${elementType}_font-size`;

export const typos: Record<ElementType, string> = {
  'component': getTypo('component'),
  'component-header': getTypo('component'),
  paragraph: getTypo('component'),
  container: getTypo('component'),
}
