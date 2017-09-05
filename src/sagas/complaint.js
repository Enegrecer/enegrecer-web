import firebaseApp from '../utils/firebaseUtils';
import { fork, call, put, take } from 'redux-saga/effects';
import * as firebase from 'firebase';

import {
  REQUEST_CREATE_COMPLAINT, successCreateComplaint,
} from '../actions';

export function createComplaint(action) {
  const ref = firebaseApp.database().ref();
  const complaintsRef = ref.child('complaints');

  const complaintKey = complaintsRef.push({
    categoryId: action.payload.categoryId,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    informer: action.payload.informer,
    legalInformations: {
      category: 'Agressão Moral',
      formalComplaint: '07621/12',
      lawsuitNumber: '12551/76',
      legalInstitution: 'TJMG',
    },
    location: {
      address: action.payload.address,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    },
    ocurrenceDate: action.payload.ocurrenceDate,
    report: action.payload.report,
    statusId: 'new',
  }).getKey();

  return complaintKey;
}

export function* handleRequestCreateComplaint() {
  while (true) {
    const action = yield take(REQUEST_CREATE_COMPLAINT);
    const complaintKey = yield call(createComplaint, action);

    yield put(successCreateComplaint(complaintKey));
    yield put(action.payload.onSuccess);
  }
}

export default function* rootSaga() {
  yield fork(handleRequestCreateComplaint);
}
