import { State } from '../todo.state'
import { createSelector } from 'reselect'
import * as constants from '../todo.constants'

export const getTodos = (state: State) => state.todos;
export const getVisibilityFilter = (state: State) => state.visibilityFilter;
export const makeGetVisibleTodos = () => {  
  return createSelector(
    getVisibilityFilter,
    getTodos,
    (visibilityFilter, todos) => {
      switch (visibilityFilter) {
        case constants.SHOW_COMPLETED:
          return todos.filter(todo => todo.completed)
        case constants.SHOW_ACTIVE:
          return todos.filter(todo => !todo.completed)
        default:
          return todos
      }
    }
  )
}
