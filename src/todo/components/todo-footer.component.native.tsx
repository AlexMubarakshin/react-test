import React from "react";
import * as constants from "../todo.constants";
import TodoFooterBase from "./todo-footer-base.component";
import { Button } from "native-base";
import { Text, TouchableHighlight, View } from "react-native";

export default class TodoFooter extends TodoFooterBase {

  constructor(props) {
    super(props);    
  }
  public render(): React.ReactElement<any> {
    return (
      <View>
        {this.renderTodoCount() }
          { this.renderFilterLinks() }
        {this.renderClearButton() }
      </View>
    )
  }

  private renderFilterLinks() {
    return (
      [constants.SHOW_ALL, constants.SHOW_ACTIVE, constants.SHOW_COMPLETED].map(filter =>
              this.renderFilterLink(filter))
    );
  }

  private renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <Text>{activeCount || "No"} {itemWord} left</Text>
    )
  }

  private getFilterLinkStyle(filter) {
    const selectedFilter = this.props.filter;
    const selected: boolean = (filter === selectedFilter);
    return selected ? { color: "#f00" } : {};
  }

  private renderFilterLink(filter) {
    const title = TodoFooter.FILTER_TITLES[filter]
    return (
      <TouchableHighlight key={filter} onPress={ () => { this.props.onShow(filter) } }>
        <Text style={this.getFilterLinkStyle(filter)}>{title}</Text>
      </TouchableHighlight>
    );
  }

  private renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount >= 0) {
      return (
        <Button onPress={onClearCompleted} >
          Clear completed
        </Button>
      )
    }
  }


}
