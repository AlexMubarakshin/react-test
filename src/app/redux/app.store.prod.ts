import { createStore, applyMiddleware } from 'redux';
import thunk    from 'redux-thunk';
import appReducer from './app.reducer';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(appReducer);
}
