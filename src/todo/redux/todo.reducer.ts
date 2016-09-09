// todo/reducer.js
import * as t from './todo.action-types'
import { State } from './todo.state'
import { handleActions, Action } from 'redux-actions'
import { Todo } from '../todo.model'

const initialState: State = [
    <Todo>{
      text: 'Use Redux',
      completed: false,
      id: 0
    }];
/*
export default handleActions({

  [t.ADD]: (state: State, action: Action<any>): State => {
    return [
      ...state,
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.payload.text,
        completed: false
      }];      
  },


}, initialState);
*/
export default function todos(state:State = initialState, action: Action<any>): State {
  switch (action.type) {
    case t.ADD:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload.text
        },
        ...state
      ]

    case t.DELETE:
    
      return state.filter(todo =>                
        todo.id !== action.payload.id
      )

    case t.EDIT:
      return state.map(todo =>
        todo.id === action.payload.id ?
         Object.assign({}, todo, {text: action.payload.text}) :
          todo
      )

    case t.COMPLETE:
      return state.map(todo =>
        todo.id === action.payload.id ?
          Object.assign({}, todo, {completed: !todo.completed}) :
          todo
      )

    case t.COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => (
        Object.assign({}, todo, {completed: !areAllMarked})
      ))

    case t.CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}