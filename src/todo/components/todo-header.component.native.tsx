import React from "react";
import TodoAddItemContainer from "../containers/todo-add-item.container";
import TodoHeaderBase from "./todo-header-base.component";
import { Text, View} from "react-native";

export default class TodoHeader extends TodoHeaderBase {

  public render(): React.ReactElement<any> {
    return (
      <View>
        <Text>Todos</Text>
        <TodoAddItemContainer newTodo placeholder="What needs to be done?" />
      </View>
    )
  }
}
