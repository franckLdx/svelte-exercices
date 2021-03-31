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

export function sortByLaunchDate(data1, data2) {
  if (data1.launch_date_utc < data2.launch_date_utc) {
    return 1;
  } else if (data1.launch_date_utc > data2.launch_date_utc) {
    return -1;
  } else {
    return 1;
  }
}