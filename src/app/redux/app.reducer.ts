import { combineReducers } from 'redux';
import * as todoConstants from '../../todo/todo.constants'
import todoReducer from '../../todo/redux/todo.reducer'

export default combineReducers({
  [todoConstants.NAME]: todoReducer
});
