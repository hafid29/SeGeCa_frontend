import {
  PROCESS_DEL_USER_DETAIL,
  PROCESS_DEL_USER_SUCCESS,
  PROCESS_DEL_USER_FAILED,
} from "../action/action";
const initState = {
  message: "",
  isLoading: false,
  isAlert: false,
  data: [],
};
export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_DEL_USER_DETAIL:
      return {
        isLoading: true,
      };
    case PROCESS_DEL_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAlert: true,
        message: action.payload.message
      };
    case PROCESS_DEL_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        isAlert: true,
      };
    default:
      return state;
  }
};
