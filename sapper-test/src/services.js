export const loadPosts = async (context) => await load(context,
  `${url}/posts`
);

export const loadPost = async (context, postId) => await load(context,
  `${url}/posts/${postId}`
);

export const loadPostComments = async (context, postId) => await load(context,
  `${url}/posts/${postId}/comments`
);

export const loadUsers = async (context, ) => await load(context,
  `${url}/users`
);


const load = async (context, request) => {
  const response = await context.fetch(request);
  assertResponse(request, response);
  return await parseResponse(response);
}

const assertResponse = (request, response) => {
  if (!response.ok) {
    const msg = `Request failure: ${request} got ${response.status} -${response.statusText} `;
    console.error(msg);
    throw new Error(response.status);
  }
}

const parseResponse = async (response) => {
  const text = await response.text();
  return JSON.parse(text);
}

const url = "https://jsonplaceholder.typicode.com";