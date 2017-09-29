import { SUCCESS_SIGN_IN, REQUEST_SIGN_IN, FAILURE_SIGN_IN } from '../../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_SIGN_IN:
      return {
        ...state,
        logged: true,
        loginError: false,
        loginErrorMessage: null,
        user: {
          email: action.payload.user.email,
          displayName: action.payload.user.displayName,
          emailVerified: action.payload.user.emailVerified,
          uid: action.payload.user.uid,
        },
      };

    case REQUEST_SIGN_IN:
      return {
        ...state,
        logged: false
      }
    case FAILURE_SIGN_IN:
      return { 
        ...state, 
        logged: false,
        loginError: true,
        loginErrorMessage: "E-mail ou senha inválidos"
      };
    default:
      return state;
  }
};

export default reducer;
