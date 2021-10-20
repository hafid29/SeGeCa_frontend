// import action type
import {
  PROCESS_REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../action/action";

// state awal
const initState = {
  message: "",
  isLoading: false,
  isAlert: false,
  isSuccess: false,
};

// mengolah data yang dikirim dari server dan di olah oleh reducer
export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_REGISTER:
      return {
        ...state,
        isLoading: true,
        isAlert: false,
        isSuccess: false,
      };
    case REGISTER_SUCCESS:
      return {
        message: action.payload.message,
        isLoading: false,
        isAlert: false,
        isSuccess: true,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isAlert: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};
