import React from 'react';
import { render } from 'react-dom';
import Root from './root/containers/root.container';
import configureStore from './app/redux/app.store';

const store = configureStore();
const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );
