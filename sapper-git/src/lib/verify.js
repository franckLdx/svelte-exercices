const validator = RegExp(/^[\w\-]{1,100}$/);

export function checkRepository(repository) {
  return repository !== undefined && validator.test(repository)
}

export function checkOwner(owner) {
  return owner !== undefined && validator.test(owner)
}

export function checkOid(oid) {
  return oid !== undefined && validator.test(oid)
}
