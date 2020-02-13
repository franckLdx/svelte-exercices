export const assertInteger = (value) => {
  const intValue = Number(value);
  if (
    intValue === undefined ||
    intValue === "" ||
    Number.isNaN(intValue) ||
    !Number.isSafeInteger(intValue)
  ) {
    throw new Error(400);
  }
  return intValue;
}

export const onError = (context, error, message) => {
  const code = Number(error.message);
  const errorCode = Number.isNaN(code) ? 500 : code;
  context.error(errorCode, message);
}