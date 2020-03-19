export function addItem(history, name, url) {
  const item = { name, url };
  if (history === undefined) {
    return [item];
  }
  const index = history.findIndex(current => isSame(item, current));
  if (index === -1) {
    console.log('______ ADDED', item);
    return [...history, item];
  }
  console.log('______ REPLACED', item);
  return [...history.slice(0, index), item];
}

export function reset() {
  return []
}

const isSame = (object1, object2) => object1.url === object2.url;