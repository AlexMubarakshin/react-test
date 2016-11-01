import React from 'react'
import classnames from 'classnames'

export interface TodoInputOwnProps {  
  placeholder?: string;
  newTodo?: boolean;
  editing?: boolean;      
}

export interface TodoInputStateProps {
  text?: string;
}

export interface TodoInputDispatchProps {
  onSave: (string) => any;
}

export interface TodoInputProps extends TodoInputOwnProps, TodoInputStateProps, TodoInputDispatchProps {}

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

  protected handleKeyDown(key) {
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
