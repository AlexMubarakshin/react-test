import TodoInput from '../components/todo-input.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/todo.actions'
import { TodoInputStateProps, TodoInputDispatchProps, TodoInputOwnProps } from '../components/todo-input-base.component';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
        onSave: actions.addTodo
    }, dispatch);  
}

const mapStateToProps = state => ({
});

const TodoAddItemContainer = connect<TodoInputStateProps, TodoInputDispatchProps, TodoInputOwnProps>(mapStateToProps, mapDispatchToProps)(TodoInput)

export default TodoAddItemContainer
 
