export interface Line {
  type: LineType;
  code: string;
}

export type LineType = 'metros' | 'rers' | 'tramways' | 'buses' | 'noctiliens';

export type Way = 'A' | 'R';

export const line_118: Line = {
  type: 'buses',
  code: '118',
}

export const line_127: Line = {
  type: 'buses',
  code: '127',
}

