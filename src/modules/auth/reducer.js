import { SUCCESS_SIGN_IN, REQUEST_SIGN_IN, FAILURE_SIGN_IN } from '../../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_SIGN_IN:
      return {
        ...state,
        logged: true,
        user: {
          email: action.payload.user.email,
          displayName: action.payload.user.displayName,
          emailVerified: action.payload.user.emailVerified,
          uid: action.payload.user.uid,
        },
      };

    case REQUEST_SIGN_IN:
    case FAILURE_SIGN_IN:
      return { ...state, logged: false };

    default:
      return state;
  }
};

export default reducer;
