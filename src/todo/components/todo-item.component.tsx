import React, { PropTypes } from 'react'
import { Todo } from '../todo.model.ts'
import { TodoInput } from './todo-input.component'
import classnames from 'classnames'

const styles = require('./todo.css');

interface TodoProps {  
  todo: Todo;
  editTodo: (todo: Todo, text: string) => Todo;
  deleteTodo: (todo: Todo) => Todo;
  completeTodo: (todo: Todo) => Todo;
}

interface TodoState {
  editing: boolean;
}

export class TodoItem extends React.Component<TodoProps, TodoState> {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  private handleSave(todo: Todo, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo(todo)
    } else {
      this.props.editTodo(todo, text)
    }
    this.setState({ editing: false })
  }

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
          <label onDoubleClick={this.handleDoubleClick.bind(this) }>
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

