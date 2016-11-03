import React from "react";
import TodoInput from "./todo-input.component";
import TodoItemBase from "./todo-item-base.component";
import { Text, TouchableOpacity } from "react-native";
import { CheckBox, ListItem } from "native-base";

export default class TodoItem extends TodoItemBase {

  public render(): React.ReactElement<any> {
    const { todo, completeTodo, deleteTodo } = this.props

    let element: React.ReactElement<any>;
    if (this.state.editing) {
      element = (
        <ListItem>
          <TouchableOpacity onPress={() => completeTodo(todo)}>
            <CheckBox checked={todo.completed} />
          </TouchableOpacity>
          <TodoInput text={todo.text}
            editing={this.state.editing}
            onSave={(text) => this.handleSave(todo, text) } />
         </ListItem>
      )
    } else {
      element = (
        <ListItem>
          <TouchableOpacity  onPress={() => completeTodo(todo)}>
            <CheckBox checked={todo.completed} />
          </TouchableOpacity>
          <Text onLongPress={this.handleEnableEditing.bind(this)}>{todo.text + " " + (todo.completed? "Completed": "")}</Text>
         </ListItem>
      )
    }

    return (      
        element     
    )
  }
}

