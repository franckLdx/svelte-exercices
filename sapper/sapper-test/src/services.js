export const loadPosts = async (context) => await load(context,
  `${url}/posts`
);

export const loadPost = async (context, postId) => await load(context,
  `${url}/posts/${postId}`
);

export const loadPostComments = async (context, postId) => await load(context,
  `${url}/posts/${postId}/comments`
);

export const loadUsers = async (context) => await load(context,
  `${url}/users`
);

export const loadUser = async (context, userId) => await load(context,
  `${url}/users/${userId}`
);

export const makeUserLoader = (context) => {
  const userRequests = new Map();
  return async userId => {
    if (!userRequests.has(userId)) {
      userRequests.set(userId, loadUser(context, userId));
    }
    return await userRequests.get(userId);
  };
}

const load = async (context, request) => {
  const response = await context.fetch(request);
  assertResponse(request, response);
  return await parseResponse(response);
}

export const AddComment = async (comment) => {
  const uri = `${url}/comments`
  const response = await fetch(uri, { method: 'POST', body: comment });
  assertResponse(uri, response);
}

const assertResponse = (request, response) => {
  if (!response.ok) {
    const msg = `Request failure: ${request} got ${response.status} -${response.statusText} `;
    throw new Error(msg);
  }
}

const parseResponse = async (response) => {
  const text = await response.text();
  return JSON.parse(text);
}

const url = "https://jsonplaceholder.typicode.com";