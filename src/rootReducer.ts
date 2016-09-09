// rootReducer.js
import { combineReducers } from 'redux';
import todos from './todo/redux/todo.reducer'

const name = 'todos';

export default combineReducers({
  todos
});