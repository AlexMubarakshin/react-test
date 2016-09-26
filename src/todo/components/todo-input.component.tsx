import React from 'react'
import classnames from 'classnames';

const styles = require('./todo.css');

interface TodoInputProps {
  onSave: (string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

interface TodoInputState {
  text: string
}

export class TodoInput extends React.Component<TodoInputProps, TodoInputState> {

  constructor(props: TodoInputProps) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  private handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  private handleChange(e) {
    this.setState({ text: e.target.value })
  }

  private handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  public render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        }) }
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur.bind(this) }
        onChange={this.handleChange.bind(this) }
        onKeyDown={this.handleSubmit.bind(this) } />
    )
  }
}
