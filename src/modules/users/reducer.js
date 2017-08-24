import { SUCCESS_SIGN_IN } from '../../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_SIGN_IN:
    return { 
        ...state, 
        ...action.payload.user
       };
    default:
      return state;
  }
}

export default reducer;
