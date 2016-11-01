import React, { Component, AppRegistry } from 'react-native';
import Root from './app/native/containers/Root';
import configureStore from './app/redux/store/app.store.prod';

const store = configureStore();

class Todo extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeHelloWorld);
