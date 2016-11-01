import React from 'react'
import { Todo } from '../todo.model'
import * as constants from '../todo.constants'
import { setVisibilityFilter } from '../redux/todo.actions';

export interface TodoListOwnProps {    
}

export interface TodoListStateProps {
  todos: Todo[];
  filter: string;  
}

export interface TodoListDispatchProps {
  clearCompleted: () => any;
  completeAll: () => any;
  editTodo: (todo: Todo, text: string) => any;
  deleteTodo: (todo: Todo) => any;
  completeTodo: (todo: Todo) => any;
  setVisibilityFilter: (filter: string) => any;
}

export interface TodoListProps extends TodoListOwnProps, TodoListStateProps, TodoListDispatchProps {}

interface TodoListState {
  filter: string;
}

abstract class TodoList extends React.Component<TodoListProps, TodoListState> {

  protected static TODO_FILTERS = {
    [constants.SHOW_ALL]: () => true,
    [constants.SHOW_ACTIVE]: todo => !todo.completed,
    [constants.SHOW_COMPLETED]: todo => todo.completed
  }


  public abstract render();

  protected handleClearCompleted() {
    this.props.clearCompleted()
  }

  protected handleShow(filter) {
    this.props.setVisibilityFilter(filter);    
  }
}

export default TodoList;
