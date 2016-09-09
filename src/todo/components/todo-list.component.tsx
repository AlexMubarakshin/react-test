import React from 'react'
import { TodoInput } from './todo-input.component'
import { Todo } from '../todo.model'
import { TodoFooter} from './todo-footer.component'
import { TodoItem} from './todo-item.component'

interface TodoListProps {
  todos: Todo[];
  clearCompleted: () => void;
  completeAll: () => void;
  editTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

interface TodoListState {
    filter: string;
}

const SHOW_ALL = 'show_all'
const SHOW_COMPLETED = 'show_completed'
const SHOW_ACTIVE = 'show_active'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class TodoList extends React.Component<TodoListProps, TodoListState> {

  constructor(props) {
    super(props)
    this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted() {
    this.props.clearCompleted()
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, completeAll } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={completeAll} />
      )
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <TodoFooter completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      )
    }
  }

  render() {
    const { todos } = this.props
    const actions = [ this.props.editTodo, this.props.deleteTodo, this.props.completeTodo ]
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} 
              editTodo={this.props.editTodo} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}

export { TodoList };