import { formatDistance, parseISO } from "date-fns";

export function distanceDate(date, baseDate) {
  const actualDate = parseISO(date);
  return formatDistance(actualDate, baseDate);
}