import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux-actions'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../todo/redux/todo.actions'
import { Todo } from '../todo/todo.model'
import { TodoHeader } from '../todo/components/todo-header.component'
import { TodoList } from '../todo/components/todo-list.component'

type AppProps = {
  todos: Todo[],
  actions: any

}
class App extends React.Component<AppProps, void> {    
    render() {        
        return (
            <div>
            <TodoHeader addTodo={ this.props.actions.addTodo } />
            <TodoList
                todos = { this.props.todos } 
                clearCompleted = { this.props.actions.clearCompleted } 
                completeAll = { this.props.actions.completeAll }
                completeTodo = { this.props.actions.completeTodo }
                deleteTodo = { this.props.actions.deleteTodo }
                editTodo = { this.props.actions.editTodo }
                />                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {  
  return {
      actions: bindActionCreators({
        completeAll: TodoActions.completeAll, 
        completeTodo: TodoActions.completeTodo,
        clearCompleted: TodoActions.clearCompleted,
        addTodo: TodoActions.addTodo,
        editTodo: TodoActions.editTodo,
        deleteTodo: TodoActions.deleteTodo
    }, dispatch)
  }  
}


const mapStateToProps = state => ({
    todos: state.todos
});




export default connect(mapStateToProps, mapDispatchToProps)(App)