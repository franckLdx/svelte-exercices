import { goto } from "@sapper/app";

export async function load(session, name, url) {
  session.history = addItem(session.history, name, url);
  await goto(url);
}

export function addItem(history, name, url) {
  if (history === undefined) {
    return [{ name, url }];
  }
  const index = history.findIndex(current => isSame(url, current));
  if (index === -1) {
    return [...history, { name, url }];
  }
  return [...history.slice(0, index), item];
}

export function reset() {
  return []
}

const isSame = (url, item) => url === item.url;