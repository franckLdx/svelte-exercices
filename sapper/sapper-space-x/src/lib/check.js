const numberRegExp = /^\d{1,3}$/;
const rocketIdRegExp = /^\w{1,20}$/;
const shipIdRegExp = /^[\w-]{3,20}$/;

export function checkNumber(page) {
  return page !== undefined && numberRegExp.test(page);
}

export function checkRocketId(id) {
  return id !== undefined && rocketIdRegExp.test(id);
}

export function checkShipId(id) {
  return id !== undefined && shipIdRegExp.test(id);
}

export function checkErrorStatus() {

}

export function checkErrorStatusMessage() {

}