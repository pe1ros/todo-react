import { createSelector } from 'reselect'

const getVisibilityFilter = (store) => store.filterReducer.filter
const getTodos = (store) => store.todoReducer.todos

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (filter, todos) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      default:
        return todos;
    }
  })