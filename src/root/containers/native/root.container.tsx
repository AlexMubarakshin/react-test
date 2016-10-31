import React, { Component, PropTypes } from 'react';
import Redux from 'redux';
import { Provider } from 'react-redux';

interface RootProps {
  store: Redux.Store<any>
  appComponent: React.ComponentClass<any> 
  
};

export default class Root extends React.Component<RootProps, void> {
  render() {
    const App = this.props.appComponent; 
    return (
      <Provider store={this.props.store}>
        {() => <App />}
      </Provider>
    );
  }
}

