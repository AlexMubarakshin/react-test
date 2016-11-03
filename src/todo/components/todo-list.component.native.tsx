import React from "react";
import TodoInput from "./todo-input.component";
import TodoFooter from "./todo-footer.component";
import TodoItem from "./todo-item.component";
import TodoListBase from "./todo-list-base.component";
import { View } from "react-native";
import { List } from "native-base";

export default class TodoList extends TodoListBase {

  public render(): React.ReactElement<any> {
    const { todos, filter } = this.props

    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <List>
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo}
              editTodo={this.props.editTodo} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>
          ) }

        {this.renderFooter(completedCount) }
      </List>
    )
  }



  private renderFooter(completedCount) {
    const { todos, filter } = this.props
    const activeCount = todos.length - completedCount

    return (
      <TodoFooter completedCount={completedCount}
        activeCount={activeCount}
        filter={filter}
        onClearCompleted={this.handleClearCompleted.bind(this) }
        onShow={this.handleShow.bind(this) } />
    )

  }


}
