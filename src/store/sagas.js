import ActionTypes from './actionTypes';
import { getInitListAction } from './actionCreators';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTodoList() {
  const data = yield ['todo1', 'todo2'];
  yield put(getInitListAction(data));
}

function* todoSaga() {
  yield takeEvery(ActionTypes.FETCH_LIST, fetchTodoList)
}

export default todoSaga;