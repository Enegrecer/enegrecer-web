import firebaseApp from '../utils/firebaseUtils';
import { fork, call, put, take } from 'redux-saga/effects';
import {
    REQUEST_CREATE_COMPLAINT, successCreateComplaint, failureCreateComplaint
} from '../actions';

export function createComplaint(action) {

  var ref = firebaseApp.database().ref();
  var complaintsRef = ref.child('complaints');

  var obj = {
    "categoryId" : "injury",
    "createdAt" : 0,
    "informer" : "uuid",
    "legalInformations" : {
      "category" : "Agressão Moral",
      "formalComplaint" : "07621/12",
      "lawsuitNumber" : "12551/76",
      "legalInstitution" : "TJMG"
    },
    "location" : {
      "address" : "Rua s Jardim Canadá - Belo Horizonte - Minas Gerais",
      "latitude" : -45.1234,
      "longitude" : 13.34234
    },
    "ocurranceDate" : 0,
    "report" : action.payload.report,
    "statusId" : "valid"
  }
  
  complaintsRef.push(obj);
  
}

export function* handleRequestCreateComplaint() {
  while (true) {
    const action = yield take(REQUEST_CREATE_COMPLAINT);
    const { newComplaint, error } = yield call(createComplaint, action);
    if (newComplaint && !error) {
      yield put(successCreateComplaint({ newComplaint }));
    } else {
      yield put(failureCreateComplaint({ error }));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestCreateComplaint);
}
