import React from 'react'

interface TodoHeaderProps {
  addTodo: (string) => any;
}

abstract class TodoHeader extends React.Component<TodoHeaderProps, void> {
  
  public abstract render();
  
  protected handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }
}

export default TodoHeader;
