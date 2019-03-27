import ActionTypes from './actionTypes';

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