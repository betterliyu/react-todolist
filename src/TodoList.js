import React, {
  Component,
  Fragment
} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: '',
      list: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleBtnClick} >
            提交
          </button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => (
      <TodoItem
        key={index}
        index={index}
        content={item}
        deleteItem={this.handleItemDelete}
      />
    ));
  }

  handleInputChange(e) {
    const inputValue = e.target.value;
    this.setState(() => ({ inputValue }));
  }

  handleBtnClick() {
    this.setState(prevState => ({
      inputValue: '',
      list: [prevState.inputValue, ...prevState.list]
    }));
  }

  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;