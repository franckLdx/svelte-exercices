import { writable } from 'svelte/store';

const create = () => {
  const { subscribe, update } = writable([
    { id: 0, description: "foo", done: false },
    { id: 1, description: "lorem ispum", done: true },
    { id: 2, description: "Lorem ipsum dolor sit amet consectetuer", done: true },
  ]);
  return {
    subscribe,
    add: todo => update(todos => [...todos, todo]),
    remove: todoId => update(todos => {
      const filter = isId(todoId);
      todos.filter(todo => !filter(todo));
    }),
    toggle: todoId => update(todos => {
      const filter = isId(todoId);
      const todo = todos.find(filter);
      if (todo !== undefined) {
        todo.done = !todo.done;
      }
      return todos;
    }),
  };
}

export const todos = create();

const isId = id => todo => todo.id === id;