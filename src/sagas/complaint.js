import firebaseApp from '../utils/firebaseUtils';
import { fork, call, put, take } from 'redux-saga/effects';
import * as firebase from 'firebase';

import {
    REQUEST_CREATE_COMPLAINT, successCreateComplaint, failureCreateComplaint
} from '../actions';

export function createComplaint(action) {
  var ref = firebaseApp.database().ref();
  var complaintsRef = ref.child('complaints');
  
  let success = complaintsRef.push({
    categoryId : action.payload.categoryId,
    createdAt : firebase.database.ServerValue.TIMESTAMP,
    informer : "uuid",
    legalInformations : {
      category : "Agressão Moral",
      formalComplaint : "07621/12",
      lawsuitNumber : "12551/76",
      legalInstitution : "TJMG"
    },
    location : {
      address : action.payload.address,  
      latitude : action.payload.latitude,
      longitude : action.payload.longitude
    },
    ocurranceDate : action.payload.ocurranceDate,
    report : action.payload.report,
    statusId : "new"
  }).getKey();

  
  return { success };
}

export function* handleRequestCreateComplaint() {
  while (true) {
    const action = yield take(REQUEST_CREATE_COMPLAINT);
    const { success, error } = yield call(createComplaint, action);
    console.log(success);
    if (success && !error) {
      yield put(successCreateComplaint({ success }));
    } else {
      yield put(failureCreateComplaint({ error }));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestCreateComplaint);
}
