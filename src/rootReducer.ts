// rootReducer.js
import { combineReducers } from 'redux';
import todos from './todos/redux/todos.reducer'

const name = 'todos';

export default combineReducers({
  todos
});