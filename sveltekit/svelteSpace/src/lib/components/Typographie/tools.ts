export const getClamp = (clamp: number | null | undefined): string => clamp ? `line-clamp-${clamp}` : 'line-clamp-none';

export const typoType = ['component', 'component-header', "paragraph"] as const;
export type TypoType = typeof typoType[number];

export const getTypo = (typo: TypoType): string => `text-${typo} font-${typo} text-${typo}_font-size`;

export const typos: Record<TypoType, string> = {
  'component': getTypo('component'),
  'component-header': getTypo('component'),
  paragraph: getTypo('component'),
}
