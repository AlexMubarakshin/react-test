import React from 'react'
import TodoAddItemContainer from '../containers/todo-add-item.container'
import TodoHeaderBase from './todo-header-base.component'

const styles = require('./todo.css');

export default class TodoHeader extends TodoHeaderBase {

  public render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <TodoAddItemContainer newTodo          
          placeholder="What needs to be done?" />
      </header>
    )
  }
}
