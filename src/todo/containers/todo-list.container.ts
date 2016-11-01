import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/todo.actions'
import { makeGetVisibleTodos } from '../redux/todo.selectors'
import * as constants from '../todo.constants'
import { TodoListStateProps, TodoListDispatchProps, TodoListOwnProps } from '../components/todo-list-base.component';
import { setVisibilityFilter } from '../redux/todo.actions';
import TodoList from '../components/todo-list.component'

function mapDispatchToProps(dispatch): any {
  return bindActionCreators({
        completeAll: actions.completeAll, 
        completeTodo: actions.completeTodo,
        clearCompleted: actions.clearCompleted,
        editTodo: actions.editTodo,
        deleteTodo: actions.deleteTodo,
        setVisibilityFilter: actions.setVisibilityFilter
    }, dispatch);  
}

const mapStateToProps = state => ({    
    todos: makeGetVisibleTodos()(state[constants.NAME]),
    filter: state[constants.NAME].visibilityFilter
});

export default connect<TodoListStateProps, TodoListDispatchProps, TodoListOwnProps>(mapStateToProps, mapDispatchToProps)(TodoList)
