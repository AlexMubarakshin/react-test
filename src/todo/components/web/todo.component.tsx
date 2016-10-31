import * as React from 'react'
import constants from '../../todo.constants'
import TodoListContainer from '../../containers/web/todo-list.container'
import TodoHeader from './todo-header.component'

export default class TodoContainer extends React.Component<void, void> {    
    render() {        
        return (
            <div>
              <TodoHeader/>
              <TodoListContainer/>                
            </div>
        )
    }
}
 
