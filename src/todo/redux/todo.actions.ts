import * as types from './todo.action-types'
import { Action } from 'redux-actions';

export function addTodo(text: string): Action<any> {
  return { type: types.ADD, payload: { text } }
}

export function deleteTodo(id: number): Action<any> {
  return { type: types.DELETE, payload: { id } }
}

export function editTodo(id: number, text: string): Action<any> {
  return { type: types.EDIT, payload: { id, text } }
}

export function completeTodo(id: number): Action<any> {
  return { type: types.COMPLETE, payload: { id } }
}

export function completeAll(): Action<any> {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted(): Action<any> {
  return { type: types.CLEAR_COMPLETED }
}

