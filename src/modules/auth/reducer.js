import { SUCCESS_SIGN_IN, REQUEST_SIGN_IN, FAILURE_SIGN_IN } from '../../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_SIGN_IN:
      return { ...state, logged: true };

    case REQUEST_SIGN_IN:
    case FAILURE_SIGN_IN:
      return { ...state, logged:false };
      
    default:
      return state;
  }
}

export default reducer;
