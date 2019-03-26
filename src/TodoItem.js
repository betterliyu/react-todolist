import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <li
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </li>
    );
  }

  handleClick() {
    const { index, deleteItem } = this.props;
    deleteItem && deleteItem(index);
  }

}

export default TodoItem;