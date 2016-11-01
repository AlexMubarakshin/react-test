import React from 'react'
import classnames from 'classnames'
import TodoInputBase from './todo-input-base.component'

const styles = require('./todo.css');

export default class TodoInput extends TodoInputBase {

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
        onChange={(e) => this.handleChange((e.target as HTMLSelectElement).value)}
        onKeyDown={(e) => this.handleKeyDown(e.which)} />
    )
  }
}
