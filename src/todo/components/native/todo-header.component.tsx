import React from 'react'
import TodoInputContainer from '../../containers/native/todo-input.container'
import AbstractHeaderFooter from '../todo-header.component'

const styles = require('./todo.css');

export default class TodoHeader extends AbstractHeaderFooter {

  public render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <TodoInputContainer newTodo
          onSave={this.handleSave.bind(this) }
          placeholder="What needs to be done?" />
      </header>
    )
  }
}
