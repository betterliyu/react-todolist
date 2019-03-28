import React, { Component } from 'react';
import store from '../store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList
} from '../store/actionCreators';
import TodoList from '../component/TodoList';

class TodoListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  componentDidMount() {
    store.dispatch(getTodoList());
  }

  render() {
    return (
      <TodoList
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={this.handleItemClick}
      />
    );
  }


  handleBtnClick(e) {
    store.dispatch(getAddItemAction());
  }

  handleInputChange(e) {
    store.dispatch(getInputChangeAction(e.target.value));
  }

  handleItemClick(index) {
    store.dispatch(getDeleteItemAction(index));
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoListContainer;