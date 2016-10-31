import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/todo.actions'
import { getTodos } from '../redux/todo.selectors'
import * as constants from '../todo.constants'
import { TodoListProps } from '../components/todo-list.component';

function mapDispatchToProps(dispatch): any {
  return bindActionCreators({
        completeAll: actions.completeAll, 
        completeTodo: actions.completeTodo,
        clearCompleted: actions.clearCompleted,
        editTodo: actions.editTodo,
        deleteTodo: actions.deleteTodo
    }, dispatch);  
}

const mapStateToProps = state => ({
    todos: getTodos(state[constants.NAME]),
    filter: state[constants.NAME].visibilityFilter
});

export default connect<any, any, TodoListProps>(mapStateToProps, mapDispatchToProps)
