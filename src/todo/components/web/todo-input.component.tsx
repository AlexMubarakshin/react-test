import React from 'react'
import classnames from 'classnames';
import AbstractTodoInput from '../todo-input.component'

const styles = require('./todo.css');

export default class TodoInput extends AbstractTodoInput {

  public render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        }) }
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur.bind(this) }
        onChange={this.handleChange.bind(this) }
        onKeyDown={this.handleSubmit.bind(this) } />
    )
  }
}
