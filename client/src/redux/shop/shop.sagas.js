import { collection, getDocs } from 'firebase/firestore/lite';
import { takeEvery, call, put, all } from 'redux-saga/effects';

import {
  convertCollectionSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

import shopActionTypes from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shops.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = collection(firestore, 'collections');

    const snapshot = yield getDocs(collectionsRef);

    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
