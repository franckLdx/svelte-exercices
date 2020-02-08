export const assertInteger = (value, controler) => {
  const intValue = Number(value);
  if (
    intValue === undefined ||
    intValue === "" ||
    Number.isNaN(intValue) ||
    !Number.isSafeInteger(intValue)
  ) {
    controler.error("400", "Sorry, bad request");
  }
  return intValue;
}