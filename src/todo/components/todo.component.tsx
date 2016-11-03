import * as React from "react";
import TodoListContainer from "../containers/todo-list.container";
import TodoHeader from "./todo-header.component";

export default class Todo extends React.Component<void, void> {    
    public render() {
        return (
            <div>
              <TodoHeader/>
              <TodoListContainer/>
            </div>
        )
    }
}
 
