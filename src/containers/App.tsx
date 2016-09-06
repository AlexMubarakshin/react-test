import * as React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../todos/todos.model'
import { TodoList } from '../todos/components/todo-list.component'

type AppProps = {
  todos: Todo[];
}
class App extends React.Component<AppProps, void> {

    render() {
        return (
            <div>Hello world
            <TodoList
                todos = { this.props.todos }
                />                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App)