import React from 'react'
import { Todo } from '../todo.model'
import * as constants from '../todo.constants'

export interface TodoListProps {
  todos: Todo[];
  filter: string;
  clearCompleted: () => any;
  completeAll: () => any;
  editTodo: (todo: Todo, text: string) => any;
  deleteTodo: (todo: Todo) => any;
  completeTodo: (todo: Todo) => any;  
}

interface TodoListState {
  filter: string;
}

abstract class TodoList extends React.Component<TodoListProps, TodoListState> {

  protected static TODO_FILTERS = {
    [constants.SHOW_ALL]: () => true,
    [constants.SHOW_ACTIVE]: todo => !todo.completed,
    [constants.SHOW_COMPLETED]: todo => todo.completed
  }

  constructor(props) {
    super(props)
    this.state = { filter: props.filter }
  }

  public abstract render();

  protected handleClearCompleted() {
    this.props.clearCompleted()
  }

  protected handleShow(filter) {
    this.setState({ filter })
  }
}

export default TodoList;
