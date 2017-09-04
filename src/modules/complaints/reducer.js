import { REQUEST_CREATE_COMPLAINT, SUCCESS_CREATE_COMPLAINT, FAILURE_CREATE_COMPLAINT} from '../../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_CREATE_COMPLAINT:
      console.log('request');
      return { 
        ...state
       };
    case SUCCESS_CREATE_COMPLAINT:
       console.log('sucesso');
       return { 
        ...state
       };
    case FAILURE_CREATE_COMPLAINT:
       console.log('falhou');
       return { 
         ...state
        };
    default:
      return state;
  }
}

export default reducer;
