import {
  PROCESS_ADD_USER_DATA,
  SUCCESS_ADD_USER_DATA,
  FAILED_ADD_USER_DATA,
} from "../action/action";

const initState = {
  message: "",
  isLoading: false,
  isAlert: false,
};

export default (state = initState, action) => {
  switch (action.payload) {
    case PROCESS_ADD_USER_DATA:
      return {
        isLoading: true,
      };
    case SUCCESS_ADD_USER_DATA:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isAlert: true,
      };
    case FAILED_ADD_USER_DATA:
      return {
        ...state,
        isLoading: false,
        isAlert: false,
      };
    default:
      return state;
  }
};
