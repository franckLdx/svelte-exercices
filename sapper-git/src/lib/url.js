
export function getRepositoryURL(owner, repository) {
  return canical(`/repositories/${owner}/${repository}`);
}

export function getFolderURL({ owner, repository, path, oid, type }) {
  const repositorySlug = getRepositoryURL(owner, repository);
  const oidParam = getOidParam(oid);
  const typeParam = getTypeParam(type);
  return canical(`${repositorySlug}/${path}?${oidParam}&${typeParam}`);
}

const getOidParam = oid => `oid=${oid}`;
const getTypeParam = type => `type=${type}`;

export function addToPath(path, item) {
  return canical(`${path}/${item}`);
}

export function getPath(items) {
  return `/${items.join('/')}`;
}

const canical = path => path.replace(/\/{2,}/g, '/'); 