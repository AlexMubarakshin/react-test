import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/todo.actions'
import { TodoInputProps } from '../components/todo-input.component';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
        onSave: actions.addTodo
    }, dispatch);  
}

const mapStateToProps = state => ({
});

export default connect<any, any, TodoInputProps>(mapStateToProps, mapDispatchToProps)
