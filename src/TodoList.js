import 'antd/dist/antd.css';
import React, { Component } from 'react';
import {
  Button,
  Input,
  List
} from 'antd';

import store from './store';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);

    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <div style={{ margin: 10 }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: 300, marginRight: 10 }}
            onChange={this.handleInputChange} />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
          >
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: 10, width: 300 }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }

  handleBtnClick(e) {
    const action = {
      type: 'ADD_TODO_ITEM'
    };
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = {
      type: 'CHANGE_INPUT_VALUE',
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;