export function addItem(history, item) {
  if (history === undefined) {
    return [item];
  }
  const index = history.indexOf(current => isSame(item, current));
  if (index === -1) {
    return [...history, item];
  }
  const result = [history.slice(0, index), item];
  console.log(result);
  return result;
}

const isSame = (object1, object2) => object1.path === object2.path;