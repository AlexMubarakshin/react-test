import React from "react";
import TodoInputBase from "./todo-input-base.component";
import { TextInput } from "react-native";

export default class TodoInput extends TodoInputBase {

  public render(): React.ReactElement<any> {
    return (
      <TextInput
        onChangeText={this.handleChange.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onSubmitEditing={this.handleSubmitEditing.bind(this)}
      >{this.state.text}
      </TextInput>
    );
  }

  private handleSubmitEditing(event: any) {
    this.handleSubmit();
  }
}
