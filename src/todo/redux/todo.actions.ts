import * as types from './todo.action-types'
import { Todo } from '../todo.model'
import { assign } from 'lodash';
import { Action, createAction } from 'redux-actions';

export const addTodo = createAction<string, Todo>(
  types.ADD,
  (text: string):Todo => ({ text, completed: false })
)

export const deleteTodo = createAction<Todo>(
  types.DELETE,
  (todo) => todo
)

export const editTodo = createAction<any, Todo>(
  types.EDIT,
  (todo: Todo, newString: string) => <Todo>assign(todo, {text: newString})
)

export const completeTodo = createAction<Todo>(
  types.COMPLETE,
  (todo) => todo
)

export const completeAll = createAction<void>(
  types.COMPLETE_ALL,
  () => {}
)

export const clearCompleted = createAction<void>(
  types.CLEAR_COMPLETED,
  () => {}
)

