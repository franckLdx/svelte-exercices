const validator = RegExp(/^[\.\-\w]{1,100}$/);
const pathValidator = RegExp(/^[\/\.\-\w]{1,100}$/);

export function checkRepository(repository) {
  return repository !== undefined && validator.test(repository)
}

export function checkFile(file) {
  return file !== undefined && validator.test(file)
}

export function checkFolder(folder) {
  return folder !== undefined && validator.test(folder)
}

export function checkFolders(folders) {
  for (let folder of folders) {
    if (!checkFolder(folder)) {
      return false
    }
  }
  return true;
}

export function checkOwner(owner) {
  return owner !== undefined && validator.test(owner)
}

export function checkOid(oid) {
  return oid !== undefined && validator.test(oid)
}

export function checkType(type) {
  return type === "blob" || type === "tree";
}