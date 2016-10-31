import React from 'react'
import classnames from 'classnames'

export interface TodoInputProps {
  onSave: (string) => any;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

interface TodoInputState {
  text: string
}

abstract class TodoInput extends React.Component<TodoInputProps, TodoInputState> {

  constructor(props: TodoInputProps) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  public abstract render();

  protected handleSubmit(key) {
    const text = this.state.text;
    if (key === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  protected handleChange(text) {
    this.setState({ text: text })
  }

  protected handleBlur() {
    if (!this.props.newTodo) {
      this.props.onSave(this.state.text)
    }
  }

}

export default TodoInput;
