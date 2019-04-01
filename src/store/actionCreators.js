import ActionTypes from './actionTypes';

export const getInitListAction = data => ({
  type: ActionTypes.INIT_LIST,
  data
});

export const getInputChangeAction = value => ({
  type: ActionTypes.CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ActionTypes.ADD_TODO_ITEM,
});

export const getDeleteItemAction = index => ({
  type: ActionTypes.DELETE_TODO_ITEM,
  index
});

export const fetchList = () => {
  return (dispatch) => {
    setTimeout(() => {
      const data = ['todo1', 'todo2'];
      dispatch(getInitListAction(data))
    }, 500);
  }
}