import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import configureStore from "./app/redux/app.store";
import App from "./app/containers/app.container";
import Root from "./root/containers/root.container";

const store = configureStore();

export default class NativeApp extends Component<void, void> {
    render() {        
        return (
            <Root store={store} appComponent={App}/>
        );
    }
}

