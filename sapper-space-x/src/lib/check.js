const numberRegExp = RegExp(/^\d{1,3}$/);

export function checkNumber(page) {
  return page !== undefined && numberRegExp.test(page);
}

export function checkErrorStatus() {

}

export function checkErrorStatusMessage() {

}