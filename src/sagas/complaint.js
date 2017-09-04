import firebaseApp from '../utils/firebaseUtils';
import { fork, call, put, take } from 'redux-saga/effects';
<<<<<<< HEAD
import * as firebase from 'firebase';
=======
>>>>>>> 4f2095316116dcd807774bb4e77eb5e107276aa9
import {
    REQUEST_CREATE_COMPLAINT, successCreateComplaint, failureCreateComplaint
} from '../actions';

export function createComplaint(action) {
<<<<<<< HEAD
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
