export const elemntsType = ['container', 'component', 'component-header', "paragraph"] as const;
export type ElementType = typeof elemntsType[number];

