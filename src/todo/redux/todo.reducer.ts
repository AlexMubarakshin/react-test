// todo/reducer.js
import * as t from './todo.action-types'
import { State } from '../todo.state'
import { Todo } from '../todo.model'
import { handleActions, Action } from 'redux-actions'


const initialState: State = {
  todos: [
    <Todo>{
      text: 'Use Redux',
      completed: false,
      id: 0
    }]
}

export default handleActions<State, Todo>({
  [t.ADD]: (state: State, action: Action<Todo>): State => {
    return {
      todos: [
        ...state.todos,
        {
          id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.payload.text,
          completed: false
        }]
    };
  },
  [t.DELETE]: (state: State, action: Action<Todo>): State => {
    return {
      todos: state.todos.filter(todo =>
        todo.id !== action.payload.id)
    };
  },
  [t.EDIT]: (state: State, action: Action<Todo>): State => {
    return {
      todos: state.todos.map(todo =>
        todo.id === action.payload.id ?
          <Todo>Object.assign({}, todo, { text: action.payload.text }) :
          todo
      )
    };
  },
  [t.COMPLETE]: (state: State, action: Action<Todo>): State => {
    return {
      todos: state.todos.map(todo =>
        todo.id === action.payload.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      )
    };
  },
  [t.COMPLETE_ALL]: (state: State, action: Action<Todo>): State => {
    const areAllMarked = state.todos.every(todo => todo.completed);
    return {
      todos: state.todos.map(todo => (
        <Todo>Object.assign({}, todo, { completed: !areAllMarked })
      ))
    };
  },
  [t.CLEAR_COMPLETED]: (state: State, action: Action<Todo>): State => {
    return {
      todos: state.todos.filter(todo => todo.completed === false)
    };
  }
}, initialState);
