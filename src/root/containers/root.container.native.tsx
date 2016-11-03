import React, { Component, PropTypes } from 'react';
import Redux from 'redux';
import { Provider } from 'react-redux';
import App from '../../app/containers/app.container';
import { Container, Header, Footer, Title, Content } from 'native-base';
import { Dimensions, FlexJustifyType, FlexAlignType, View, StyleSheet } from 'react-native';
let MapView = require('react-native-maps');

interface RootProps {
  store: Redux.Store<any>     
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
 container: Object.assign({   
   justifyContent: 'flex-end' as FlexJustifyType,
   alignItems: 'stretch' as FlexAlignType
 }, StyleSheet.absoluteFillObject),
 map: {
     position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: height / 2,
   },
  todoList: {    
    top: height / 2,
    left: 0,
    right: 0,
    bottom: 0,         
    justifyContent: 'flex-end' as FlexJustifyType,
    alignItems: 'stretch' as FlexAlignType
  } 
});

export default class Root extends React.Component<RootProps, void> {
  
  render() {    
    return (
      <Provider store={this.props.store}>   
                
            <View style ={styles.container}>
              <MapView style={styles.map}
                  region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
              }}/>
              <Container style={styles.todoList}>
                <Content>
                  <App/>
                </Content>                
              </Container>
              
            </View>
        
      </Provider>
    );
  }
}

