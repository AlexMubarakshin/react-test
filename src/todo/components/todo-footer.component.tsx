
import React from 'react'
import { TodoInput } from './todo-input.component'
import classnames from 'classnames'

const styles = require('./todo.css');

interface TodoFooterProps {
  completedCount: number;
  activeCount: number;
  filter: string;
  onClearCompleted: () => void;
  onShow: (string) => void;
}

const SHOW_ALL = 'show_all'
const SHOW_COMPLETED = 'show_completed'
const SHOW_ACTIVE = 'show_active'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export class TodoFooter extends React.Component<TodoFooterProps, void> {
  private renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  private renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <a className={classnames({ selected: filter === selectedFilter }) }
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter) }>
        {title}
      </a>
    )
  }

  private renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
          onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  public render() {
    return (
      <footer className="footer">
        {this.renderTodoCount() }
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter) }
            </li>
          ) }
        </ul>
        {this.renderClearButton() }
      </footer>
    )
  }
}
