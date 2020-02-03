import { writable } from 'svelte/store';

export const state_loading = Symbol("loading");
export const state_loaded = Symbol("loaded");
export const state_error = Symbol("error");

const create = () => {
  const { subscribe, update } = writable({
    state: undefined,
    users: []
  }, loadTodos);

  return {
    subscribe,
    add: todo => update(todos => [...todos, todo]),
    remove: todoId => update(todos => {
      const filter = isId(todoId);
      return todos.filter(todo => !filter(todo));
    }),
    toggle: todoId => update(todos => {
      const filter = isId(todoId);
      return todos.map(todo =>
        filter(todo) ? { ...todo, completed: !todo.completed } : todo
      );
    }),
  };
}

export const usersStore = create();

const isId = id => todo => todo.id === id;

async function loadTodos(set) {
  set({
    state: state_loading,
    users: []
  });
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const text = await res.text();
  set({
    state: state_loaded,
    users: JSON.parse(text)
  });
}
