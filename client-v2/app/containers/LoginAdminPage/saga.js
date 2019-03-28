import {
  takeLatest,
  select,
  put,
  fork,
  take,
  cancel,
} from 'redux-saga/effects';
import Api from 'utils/Api';
import { LOCATION_CHANGE, push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import { setUser, setToken } from '../App/actions';

// Individual exports for testing
export const validate = data => {
  const errors = {};
  if (!data.email) errors.email = 'email is required';
  if (!data.password) errors.password = 'password is required';
  return { errors, isValid: !Object.keys(errors).length };
};

export function* redirectOnSuccess(redirect) {
  const { payload } = yield take(types.LOGIN_SUCCESS);
  const { token, data } = payload;
  yield put(setUser(data));
  yield put(setToken(token));
  if (redirect) {
    yield put(push(redirect));
  } else {
    yield put(push('/admin/dashboard'));
  }
}

export function* loginAction(action) {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const data = { email, password };
  const errors = validate(data);
  if (errors.isValid) {
    const successWatcher = yield fork(redirectOnSuccess, action.redirect);
    yield fork(
      Api.post('user/login', actions.loginSuccess, actions.loginFailure, data),
    );
    yield take([LOCATION_CHANGE, types.LOGIN_FAILURE]);
    yield cancel(successWatcher);
  } else {
    yield put(actions.setStoreValue({ key: 'errors', value: errors.errors }));
  }
}

export default function* loginAdminPageSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginAction);
}
