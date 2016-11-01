import * as React from 'react'
import TodoListContainer from '../containers/todo-list.container'
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
 
