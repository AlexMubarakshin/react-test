import React, { PropTypes } from 'react'
import { Todo } from '../todos.model'
import { TodoItem } from './todo-item.component'

declare type TodoListProps = {
  todos: Todo[];
}

declare type TodoListState = {
  filter: string; 
}

class TodoList extends React.Component<TodoListProps, TodoListState> {

  constructor(props: TodoListProps) {
    super(props);
  }
  
  public render() {
    return (
     <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo =>
            <TodoItem
              todo={todo}
            ></TodoItem>
          )}
        </ul>        
      </section>
    )
  }
}

export { TodoList };
