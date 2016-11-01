import React from 'react'
import classnames from 'classnames'
import { Text } from 'react-native'
import * as constants from '../todo.constants'

interface TodoFooterProps {
  completedCount: number;
  activeCount: number;
  filter: string;
  onClearCompleted: () => any;
  onShow: (string) => any;
}


abstract class TodoFooter extends React.Component<TodoFooterProps, void> {
  protected static FILTER_TITLES = {
    [constants.SHOW_ALL]: 'All',
    [constants.SHOW_ACTIVE]: 'Active',
    [constants.SHOW_COMPLETED]: 'Completed'
  }
  
  public abstract render();
  
}
export default TodoFooter;
