
export function getRepositoryURL(repository, login) {
  return `/repositories/repository?repository=${repository}&owner=${login}`;
}

export function getFileURL(repositoryName, login, fileName, oid) {
  return `/repositories/file?repository=${repositoryName}&owner=${login}&fileName=${fileName}&oid=${oid}`;
}

export function getFolderURL(repositoryName, owner, folderName, oid) {
  return `/repositories/folder?repository=${repositoryName}&folderName=${folderName}&owner=${owner}&oid=${oid}`;
}