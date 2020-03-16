
export function getRepositoryURL(repository, login) {
  return `/repositories/repository?repository=${repository}&owner=${login}`;
}

export function getFileURL(repositoryName, login, fileName, oid) {
  return `/repositories/file?repository=${repositoryName}&owner=${login}&fileName=${fileName}&oid=${oid}`;
}

export function getFolderURL({ owner, repositoryName, parentPath, folderName, oid }) {
  return `/repositories/folder?owner=${owner}&repository=${repositoryName}&parentPath=${parentPath || ''}&folderName=${folderName || ''}&oid=${oid}`;
}