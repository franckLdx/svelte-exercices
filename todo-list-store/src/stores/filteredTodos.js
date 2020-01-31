import { derived } from 'svelte/store';
import { filter, FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from './filter'
import { todos } from './todos'

function create() {
  const { subscribe } = derived(
    [filter, todos],
    ([$filter, $todos]) => {
      const filterFunction = getFilterFunction($filter);
      return filterFunction ? $todos.filter(filterFunction) : $todos;
    }
  );
  return { subscribe, toggle: todos.toggle };
}

const getFilterFunction = filter => {
  switch (filter) {
    case FILTER_ALL:
      return undefined;
    case FILTER_DONE:
      return todo => todo.completed;
    case FILTER_UNDONE:
      return todo => !todo.completed;
    default:
      throw new Error(`Unexpected filter: ${filter}`)
  }
}

export const filteredTodos = create();