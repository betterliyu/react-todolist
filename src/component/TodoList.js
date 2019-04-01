import 'antd/dist/antd.css';
import React from 'react';
import {
  Button,
  Input,
  List
} from 'antd';

class TodoList extends React.Component {
  componentWillMount() {
    this.props.initList();
  }

  render() {
    const {
      inputValue,
      list,

      addTodoItem,
      changeInputValue,
      deleteTodoItem
    } = this.props;
    return (
      <div style={{ margin: 10 }}>
        <div>
          <Input
            value={inputValue}
            placeholder="todo info"
            style={{ width: 300, marginRight: 10 }}
            onChange={changeInputValue} />
          <Button
            type="primary"
            onClick={addTodoItem}
          >提交
          </Button>
        </div>
        <List
          style={{ marginTop: 10, width: 300 }}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => deleteTodoItem(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
export default TodoList;