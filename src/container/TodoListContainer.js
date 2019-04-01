import React from 'react';
import { connect } from 'react-redux';
import {
  getAddItemAction,
  getDeleteItemAction,
  getInputChangeAction,
  getInitListAction
} from '../store/actionCreators';
import TodoList from '../component/TodoList';


const TodoListContainer = props => <TodoList {...props} />;

const mapStateToProps = (state, ownProps) => ({
  inputValue: state.inputValue,
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  initList: () => dispatch(getInitListAction(['todo1', 'todo2'])),
  changeInputValue: e => dispatch(getInputChangeAction(e.target.value)),
  addTodoItem: () => dispatch(getAddItemAction()),
  deleteTodoItem: index => dispatch(getDeleteItemAction(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);