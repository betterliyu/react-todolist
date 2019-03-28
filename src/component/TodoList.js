import 'antd/dist/antd.css';
import React from 'react';
import {
  Button,
  Input,
  List
} from 'antd';

const TodoList = (props) => {
  return (
    <div style={{ margin: 10 }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: 300, marginRight: 10 }}
          onChange={props.handleInputChange} />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
        >提交
        </Button>
      </div>
      <List
        style={{ marginTop: 10, width: 300 }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleItemClick(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}

export default TodoList;