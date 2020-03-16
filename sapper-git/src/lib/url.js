
export function getRepositoryURL(owner, repositoryName) {
  return `/repositories/repository?repositoryName=${repositoryName}&owner=${owner}`;
}

export function getFileURL(owner, repositoryName, fileName, oid) {
  return `/repositories/file?repositoryName=${repositoryName}&owner=${owner}&fileName=${fileName}&oid=${oid}`;
}

export function getFolderURL({ owner, repositoryName, parentPath, folderName, oid }) {
  return `/repositories/folder?owner=${owner}&repositoryName=${repositoryName}&parentPath=${parentPath || ''}&folderName=${folderName || ''}&oid=${oid}`;
}