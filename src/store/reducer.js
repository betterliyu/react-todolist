import ActionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === ActionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === ActionTypes.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  } else if (action.type === ActionTypes.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
}