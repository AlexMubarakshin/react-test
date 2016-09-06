import React, { PropTypes } from 'react'
import { Todo } from '../todos.model.ts'

declare type TodoProps = {  
  todo: Todo
}

declare type TodoState = {
  
}

class TodoItem extends React.Component<TodoProps, TodoState> {

  constructor(props: TodoProps) {
    super(props);
  }
  
  public render() {
    return (
    <li      
      style={{
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }}
    >
      {this.props.todo.text}
    </li>  
    )
  }
}

export { TodoItem };
