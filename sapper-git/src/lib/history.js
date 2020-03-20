import { goto } from "@sapper/app";

export async function load(session, name, url) {
  session.history = addItem(session.history, name, url);
  await goto(url);
}

export function addItem(history, name, url) {
  const item = { name, url };
  if (history === undefined) {
    return [item];
  }
  const index = history.findIndex(current => isSame(url, current));
  if (index === -1) {
    return [...history, item];
  }
  return history.slice(0, index + 1);
}

export function reset() {
  return []
}

const isSame = (url, item) => url === item.url;