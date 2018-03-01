import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/dashboard';
import * as api from '../../services/api';

export function* getUploads() {
	const uploads = yield call(api.getUploads);
	yield put(actions.receiveUploads(uploads.data));
}

export function* watchGetUploads() {
	yield takeEvery(actions.GET_UPLOADS, getUploads)
}

export default function* root() {
	yield all([
		fork(watchGetUploads)
	])
}

