import React from "react";
import TodoListContainer from "../containers/todo-list.container";
import TodoHeader from "./todo-header.component";
import { Text, View } from "react-native";

export default class Todo extends React.Component<void, void> {    
    public render(): React.ReactElement<any> {
        return (
            <View>
              <TodoHeader/>
              <TodoListContainer/>
            </View>
        )
    }
}
 
