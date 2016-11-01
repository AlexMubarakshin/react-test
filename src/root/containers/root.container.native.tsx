import React, { Component, PropTypes } from 'react';
import Redux from 'redux';
import { Provider } from 'react-redux';
import App from '../../app/containers/app.container';

interface RootProps {
  store: Redux.Store<any>     
};

export default class Root extends React.Component<RootProps, void> {
  render() {    
    return (
      <Provider store={this.props.store}>
        {() => <App />}
      </Provider>
    );
  }
}

