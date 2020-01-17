import { derived } from 'svelte/store';
import { filter, FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from './filter'
import { todos } from './todos'

export const filteredTodos = derived(
  [filter, todos],
  ([$filter, $todos]) => {
    const filterFunction = getFilterFunction($filter);
    if (!filterFunction) {
      return $todos
    } else {
      return $todos.filter(filterFunction);
    }
  }
);

const getFilterFunction = filter => {
  switch (filter) {
    case FILTER_ALL:
      return undefined;
    case FILTER_DONE:
      return todo => todo.done;
    case FILTER_UNDONE:
      return todo => !todo.done;
    default:
      throw new Error(`Unexpected filter: ${filter}`)
  }
}