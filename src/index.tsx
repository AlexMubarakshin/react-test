// Import React and React DOM
import * as React from 'react';
import { render } from 'react-dom';
import { Store, createStore } from 'redux';
// Import the Hot Module Reloading App Container – more on why we use 'require' below
// This is a useful trick to know, as it allows you to import an npm module without requiring any type declarations.
const { AppContainer } = require('react-hot-loader');
import { Provider } from 'react-redux';

// Import our App container (which we will create in the next step)
import  App  from './containers/App';
import rootReducer from './rootReducer';

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Get the root element from the HTML
const rootEl = document.getElementById('app');

const initialState = {
  todos: [ 
    { 
      id: 1,
      text: 'todo1',
      completed: false
    }]
};

const store: Store<any> = createStore(rootReducer, initialState, (window as any).devToolsExtension && (window as any).devToolsExtension());

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/App').default;

    // And render it into the root element again
    render(
      <AppContainer>
         <Provider store={store}>
            <NextApp />
         </Provider>
      </AppContainer>,
      rootEl
    );
  })
}