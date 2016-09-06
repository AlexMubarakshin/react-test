// todos/reducer.js
import * as t from './todos.action-types';
import { State } from './todos.state';
import { handleActions, Action } from 'redux-actions';

const initialState: State = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

export default handleActions({

  [t.ADD]: (state: State, action: Action<any>): State => {
    return [
      ...state,
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.payload.text,
        completed: false
      }];      
  } 

}, initialState);