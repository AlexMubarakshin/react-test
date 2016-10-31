import React, { PropTypes } from 'react'
import TodoInput from './todo-input.component'
import classnames from 'classnames'
import AbstractTodoItem from '../todo-item.component'

const styles = require('./todo.css');

export default class TodoItem extends AbstractTodoItem {

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoInput text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo, text) } />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo) } />
          <label onDoubleClick={this.handleEnableEditing.bind(this) }>
            {todo.text}
          </label>
          <button className="destroy"
            onClick={() => deleteTodo(todo) } />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      }) }>
        {element}
      </li>
    )
  }
}

