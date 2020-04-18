import { formatDistance, parseISO, format } from "date-fns";

export function distanceDate(dateStr, baseDate) {
  const date = getDate(dateStr);
  return formatDistance(date, baseDate);
}

const FORMAT = 'yyyy-MM-dd';
export function formatDate(dateStr) {
  const date = getDate(dateStr);
  return format(date, FORMAT);
}

const getDate = (dateStr) => parseISO(dateStr);