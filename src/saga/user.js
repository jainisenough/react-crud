import { put, takeLatest } from 'redux-saga/effects';
import { get } from 'helper/request';
import { userActionType, setUsers } from 'action/user';

export default function* () {
  yield takeLatest(userActionType.pending, function* () {
    try {
      const resp = yield get(`https://api.github.com/users?per_page=10`);
      yield put(setUsers(resp));
    } catch (e) {
      console.log(e);
      yield put({ type: userActionType.rejected });
    }
  });
}
