import React from 'react'
import { TodoInput } from './todo-input.component'

const styles = require('./todo.css');

interface TodoHeaderProps {
  addTodo: (string) => void;
}

class TodoHeader extends React.Component<TodoHeaderProps, void> {
    private handleSave(text) {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }

    public render() {
        return (
        <header className="header">
            <h1>todos</h1>
            <TodoInput newTodo
                            onSave={this.handleSave.bind(this)}
                            placeholder="What needs to be done?" />
        </header>
        )
    }
}

export { TodoHeader }