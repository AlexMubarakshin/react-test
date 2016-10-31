import React from 'react'
import AbstractTodoFooter from '../todo-footer.component'
import TodoInput from './todo-input.component'
import constants from '../../todo.constants'
import classnames from 'classnames'

const styles = require('./todo.css');

export default class TodoFooter extends AbstractTodoFooter {

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
    const title = TodoFooter.FILTER_TITLES[filter]
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
          {[constants.SHOW_ALL, constants.SHOW_ACTIVE, constants.SHOW_COMPLETED].map(filter =>
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
