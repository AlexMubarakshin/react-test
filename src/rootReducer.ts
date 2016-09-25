// rootReducer.js
import { combineReducers } from 'redux';
import todo from './todo/index'

export default combineReducers({
  [todo.constants.NAME]: todo.redux.reducer
});
