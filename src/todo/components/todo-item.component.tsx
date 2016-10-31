import React, { PropTypes } from 'react'
import { Todo } from '../todo.model'
import classnames from 'classnames'

interface TodoProps {  
  todo: Todo;
  editTodo: (todo: Todo, text: string) => any;
  deleteTodo: (todo: Todo) => any;
  completeTodo: (todo: Todo) => any;
}

interface TodoState {
  editing: boolean;
}

abstract class TodoItem extends React.Component<TodoProps, TodoState> {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  public abstract render();
  
  protected handleEnableEditing() {
    this.setState({ editing: true })
  }

  protected handleSave(todo: Todo, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo(todo)
    } else {
      this.props.editTodo(todo, text)
    }
    this.setState({ editing: false })
  }
}

export default TodoItem;
