import { writable } from 'svelte/store';

const create = () => {
  const { subscribe, update } = writable([], loadTodos);

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

export const todos = create();

const isId = id => todo => todo.id === id;

async function loadTodos(set) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const text = await res.text();
  set(JSON.parse(text));
}