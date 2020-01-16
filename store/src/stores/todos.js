import { writable } from 'svelte/store';

const create = () => {
  const { subscribe, update } = writable({ todos: [] });
  return {
    subscribe,
    addTodo: todo => update(todos => [...todos, todo]),
    removeTodo: todoId => update(todos => todos.filter(current => current.id !== todoId)),
  };
}

export const todos = create();