import { takeLatest, call, put } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_REQUEST, USER_LOGIN_COMPLETE, USER_LOGIN_ERROR } from '../actions';
import { userLogin as userLoginApi } from '../api/auth';

type LoginAction = {
  payload: {
    username: string;
    password: string;
  };
};

export function* userLoginAsync(action: LoginAction): Generator {
  console.log('User login saga started: ', action);

  try {
    yield put({ type: USER_LOGIN_REQUEST });

    const data = yield call(userLoginApi, action.payload);

    yield put({
      type: USER_LOGIN_COMPLETE,
      payload: data,
    });
  } catch (error: any) {
    console.log('User login saga error: ', error);
    yield put({
      type: USER_LOGIN_ERROR,
      error: error?.message || 'Login failed',
    });
  }
}

export function* userLogin(): Generator {
  yield takeLatest(USER_LOGIN as any, userLoginAsync as any);
}