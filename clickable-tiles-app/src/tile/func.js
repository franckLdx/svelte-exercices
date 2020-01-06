const getIsClass = (value) => value ? `is-${value} ` : undefined;

export const getColor = getIsClass;

export const getSize = getIsClass;

export function getIsVertical(isVertical) {
  return isVertical ? "is-vertical" : undefined;
}
